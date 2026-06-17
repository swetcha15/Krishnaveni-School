import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./Applications.css";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("admissions")
      .select("*")
      .order("id", { ascending: false });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      console.log(error);
    } else {
      setApplications(data || []);
    }

    setLoading(false);
  };

  const deleteApplication = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase
      .from("admissions")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      fetchApplications();
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="applications-container">
      <Link to="/" className="home-btn">
        ← Back To Home
      </Link>

      <div className="stats-card">
        <h2>Total Applications</h2>
        <h1>{applications.length}</h1>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <table className="app-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications
            .filter((app) =>
              `${app.firstname} ${app.lastname}`
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((app) => (
              <tr key={app.id}>
                <td>{app.firstname}</td>
                <td>{app.lastname}</td>
                <td>{app.email}</td>
                <td>{app.phoneno}</td>
                <td>{app.grade}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteApplication(app.id)
                    }
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;