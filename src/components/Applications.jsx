import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./Applications.css";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("admissions")
      .select("*")
      .order("id", { ascending: false });

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

    if (!confirmDelete) return;

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

  const downloadCSV = () => {
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Grade",
    ];

    const rows = applications.map((app) => [
      app.firstname,
      app.lastname,
      app.email,
      app.phoneno,
      app.grade,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "applications.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  };
  <div className="dashboard-header">
  <div>
    <h1>📚 Admissions Dashboard</h1>
    <p>Manage student applications efficiently</p>
  </div>
</div>

 const grade5Count = applications.filter(
  (app) => app.grade === "Grade 5"
).length;

const grade6Count = applications.filter(
  (app) => app.grade === "Grade 6"
).length;

const grade7Count = applications.filter(
  (app) => app.grade === "Grade 7"
).length;

if (loading) {
  return <h2>Loading...</h2>;
}

  return (
    <div className="applications-container">
      <Link to="/" className="home-btn">
        ← Back To Home
      </Link>

     <div className="stats-grid">
  <div className="stats-card">
    <h2>Total Applications</h2>
    <h1>{applications.length}</h1>
  </div>

  <div className="stats-card">
    <h2>Grade 5</h2>
    <h1>{grade5Count}</h1>
  </div>

  <div className="stats-card">
    <h2>Grade 6</h2>
    <h1>{grade6Count}</h1>
  </div>

  <div className="stats-card">
    <h2>Grade 7</h2>
    <h1>{grade7Count}</h1>
  </div>
</div>
  

     <button
  onClick={downloadCSV}
  className="export-btn"
>
  📥 Export CSV
</button>

      <input
        type="text"
        placeholder="🔍 Search Student..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
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
            <th>Date</th>
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
                  {new Date(
                    app.created_at
                  ).toLocaleDateString()}
                </td>

                <td>
  <button
    onClick={() =>
      setSelectedStudent(app)
    }
    style={{
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "5px",
      marginRight: "8px",
      cursor: "pointer",
    }}
  >
    View
  </button>

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

{selectedStudent && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2>Student Details</h2>

      <p>
        <strong>Name:</strong>{" "}
        {selectedStudent.firstname}{" "}
        {selectedStudent.lastname}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {selectedStudent.email}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {selectedStudent.phoneno}
      </p>

      <p>
        <strong>Grade:</strong>{" "}
        {selectedStudent.grade}
      </p>

      <p>
        <strong>Applied On:</strong>{" "}
        {new Date(
          selectedStudent.created_at
        ).toLocaleDateString()}
      </p>

      <button
        onClick={() =>
          setSelectedStudent(null)
        }
        className="close-btn"
      >
        Close
      </button>
    </div>
  </div>
)}

</div>
  );
};

export default Applications;