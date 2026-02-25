import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./ViewsStudent.module.css";
import axios from "axios";

export const ViewStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  if (!student) return <div className={style.container}>Loading...</div>;

  return (
    <div className={style.container}>
      <h2>View Student</h2>

      <div className={style.detail}>
        <p>
          <strong>Name:</strong> {student.Name}
        </p>
        <p>
          <strong>Father Name:</strong> {student.Fathername}
        </p>
        <p>
          <strong>Cast:</strong> {student.Cast}
        </p>
        <p>
          <strong>Class:</strong> {student.Class}
        </p>
        <p>
          <strong>Fees:</strong> {student.Fees}
        </p>
        <p>
          <strong>Fees Status:</strong> {student.FeesStatus}
        </p>
        <p>
          <strong>Date:</strong> {student.Date}
        </p>
        <p>
          <strong>Time:</strong> {student.Time}
        </p>
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
