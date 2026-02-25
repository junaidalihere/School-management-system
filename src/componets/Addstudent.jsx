import React, { useState } from "react";
import style from "./addstudent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Addstudent = () => {
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

  const onchangehandl = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitdata = (e) => {
    e.preventDefault();
    console.log("Sending Form:", form);
    axios.post("http://localhost:5000/students", form).then(() => {
      navigate("/");
    });
  };

  return (
    <div className={style.container}>
      <h2>Add Student</h2>

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

        <button type="submit" className={style.bTn}>
          Add Student
        </button>
        <button
          className={style.bTn}
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};
