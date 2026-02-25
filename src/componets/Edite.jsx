import React, { useEffect, useState } from "react";
import style from "./Edite.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Edite = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Name: "",
    Fathername: "",
    Cast: "",
    Class: "",
    Fees: "",
    FeesStatus: "",
    Date: "",
    Time: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`, form).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const onchangehandl = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitdata = (e) => {
    e.preventDefault();
    console.log("Sending Form:", form);
    axios.put(`http://localhost:5000/students/${id}`, form).then(() => {
      navigate("/");
    });
  };

  return (
    <div className={style.container}>
      <h2>Edit Student</h2>

      <form className={style.form} onSubmit={submitdata}>
        <input
          type="text"
          name="Name"
          placeholder="Student Name"
          value={form.Name}
          onChange={onchangehandl}
          required
        />
        <input
          type="text"
          name="Fathername"
          placeholder="Father Name"
          value={form.Fathername}
          onChange={onchangehandl}
          required
        />
        <input
          type="text"
          name="Cast"
          placeholder="Cast"
          value={form.Cast}
          onChange={onchangehandl}
          required
        />
        <input
          type="text"
          name="Class"
          placeholder="Class"
          value={form.Class}
          onChange={onchangehandl}
          required
        />
        <input
          type="number"
          name="Fees"
          placeholder="Fees Amount"
          value={form.Fees}
          onChange={onchangehandl}
          required
        />
        <select
          name="FeesStatus"
          value={form.FeesStatus}
          onChange={onchangehandl}
          required
        >
          <option value="">Fees Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
        <input
          type="date"
          name="Date"
          value={form.Date}
          onChange={onchangehandl}
          required
        />
        <input
          type="time"
          name="Time"
          value={form.Time}
          onChange={onchangehandl}
          required
        />

        <button type="submit" onClick={() => navigate("/")}>
          Update Student
        </button>
        <button>Back</button>
      </form>
    </div>
  );
};
