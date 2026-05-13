import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdmissionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    grade: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = {
        ...formData,
        phoneno: formData.phoneno.replace(/\D/g, '')
      };

      const { data, error } = await supabase
        .from('admissions')
        .insert([payload]);

      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Application submitted successfully! We will contact you soon.' });
      setFormData({ firstname: '', lastname: '', email: '', phoneno: '', grade: '' });
      setTimeout(() => {
        onClose();
        setMessage({ type: '', text: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ 
        type: 'error', 
        text: `Error: ${error.message || 'Failed to submit application. Check if table exists and RLS allows inserts.'}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Apply for Admission</h2>
        
        {message.text && (
          <div className={`message-box ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admission-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" name="firstname" required value={formData.firstname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" required value={formData.lastname} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input type="tel" id="phoneno" name="phoneno" required value={formData.phoneno} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade Applying For</label>
            <select id="grade" name="grade" required value={formData.grade} onChange={handleChange}>
              <option value="" disabled>Select Grade</option>
              <option value="Kindergarten">Kindergarten</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10 (X Grade)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
