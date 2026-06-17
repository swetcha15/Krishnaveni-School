import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./Applications.css"

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
.select("*");


if (error) {
  console.log(error);
} else {
  setApplications(data);
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
<Link
  to="/"
  style={{
    display: "inline-block",
    marginBottom: "20px",
    textDecoration: "none",
    background: "#2563eb",
    color: "white",
    padding: "10px 15px",
    borderRadius: "6px",
  }}
>
  ← Back To Home
</Link>

return (
<div className="applications-container">
<div className="stats-card">
<h2>Total Applications</h2> <h1>{applications.length}</h1> </div>


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
      <tr
        style={{
          background: "#2563eb",
          color: "white",
        }}
      >
        <th style={{ padding: "12px" }}>First Name</th>
        <th style={{ padding: "12px" }}>Last Name</th>
        <th style={{ padding: "12px" }}>Email</th>
        <th style={{ padding: "12px" }}>Phone</th>
        <th style={{ padding: "12px" }}>Grade</th>
        <th style={{ padding: "12px" }}>Action</th>
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
            <td style={{ padding: "12px" }}>
              {app.firstname}
            </td>
            <td style={{ padding: "12px" }}>
              {app.lastname}
            </td>
            <td style={{ padding: "12px" }}>
              {app.email}
            </td>
            <td style={{ padding: "12px" }}>
              {app.phoneno}
            </td>
            <td style={{ padding: "12px" }}>
              {app.grade}
            </td>
            <td style={{ padding: "12px" }}>
             <Link
  to="/"
  className="home-btn"
></Link>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>


);
};

export default Applications
