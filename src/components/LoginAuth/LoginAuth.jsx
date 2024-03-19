import React, { useState } from "react";
import axios from "axios";

function LoginAuth() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  const userdata = {
    username: "kabali",
    password: "bullshit",
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        userdata,
      });
      console.log("Signup successful:", response.data);
      // Handle storing tokens in local storage
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle displaying error message to user
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {/* <input
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
      /> */}
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default LoginAuth;
