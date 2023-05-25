import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import AuthService from '../utils/Auth'

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { username, password });
      // const {token, user} = response
      // const userId = user._id 
      // AuthService.login(token) //userid
      setMessage(response.data.message);
      setEmail("");
      setUsername("");
      setPassword("");
      onClose();
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Failed to log in");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
      <button
        type="button"
        className="btn btn-link"
        onClick={() => navigate("/signup")}
      >
        Don't have an account? Sign up here.
      </button>
    </div>
  );
};

export default Login;
