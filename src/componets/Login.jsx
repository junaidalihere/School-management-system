import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5000/admins", {
        params: { username, password },
      })
      .then((res) => {
        if (res.data.length > 0) {
          localStorage.setItem("admin", JSON.stringify(res.data[0]));
          navigate("/");
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>Username: admin</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>Password : 123456</p>
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
