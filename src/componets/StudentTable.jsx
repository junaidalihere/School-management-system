import { useEffect, useState } from "react";
import style from "./StudentTable.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      setStudent(res.data);
    });
  }, []);

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`http://localhost:5000/students/${id}`).then(() => {
        setStudent(student.filter((item) => item.id !== id));
      });
    }
  };

  // 🔍 Search filter
  const filteredStudents = student.filter(
    (item) =>
      item.Name.toLowerCase().includes(search.toLowerCase()) ||
      item.Fathername.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={style.container}>
      {/* TOP BAR */}
      <div className={style.topBar}>
        <h2>Students Record</h2>

        <div className={style.btnGroup}>
          <button
            className={style.logoutBtn}
            onClick={() => {
              localStorage.removeItem("admin");
              navigate("/login");
            }}
          >
            🔒 Logout
          </button>
          <button
            className={style.addBtn}
            onClick={() => navigate("/addstudent")}
          >
            ➕ Add Student
          </button>

          <button
            className={style.dashboardBtn}
            onClick={() => navigate("/dashboard")}
          >
            📊 Dashboard
          </button>
        </div>
      </div>

      {/* 🔍 SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search by student name..."
        className={style.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* TABLE */}
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Cast</th>
              <th>Class</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Fathername}</td>
                <td>{item.Cast}</td>
                <td>{item.Class}th</td>
                <td>
                  <span
                    className={
                      item.FeesStatus === "Paid" ? style.paid : style.unpaid
                    }
                  >
                    {item.FeesStatus}
                  </span>
                </td>
                <td className={style.actions}>
                  <button
                    className={style.view}
                    onClick={() => navigate(`/studentview/${item.id}`)}
                  >
                    View
                  </button>
                  <button
                    className={style.edit}
                    onClick={() => navigate(`/studentedite/${item.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className={style.delete}
                    onClick={() => deleteStudent(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "15px" }}
                >
                  ❌ No student found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
