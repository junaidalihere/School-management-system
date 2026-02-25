import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, []);
  const totalStudents = students.length;

  const paidStudents = students.filter((s) => s.FeesStatus === "Paid").length;

  const unpaidStudents = students.filter(
    (s) => s.FeesStatus === "Unpaid",
  ).length;

  const totalFees = students.reduce((sum, s) => sum + Number(s.Fees), 0);
  return (
    <div className={styles.dashboard}>
      <div className={styles.topBar}>
        <h2>Dashboard</h2>

        <div>
          <button className={styles.backBtn} onClick={() => navigate("/")}>
            ⬅ Back
          </button>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className={styles.card}>
          <h3>Total Fees</h3>
          <p>Rs {totalFees}</p>
        </div>

        <div className={`${styles.card} ${styles.paid}`}>
          <h3>Paid Students</h3>
          <p>{paidStudents}</p>
        </div>

        <div className={`${styles.card} ${styles.unpaid}`}>
          <h3>Unpaid Students</h3>
          <p>{unpaidStudents}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
