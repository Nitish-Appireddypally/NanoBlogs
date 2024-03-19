import React, { useState } from "react";
import axios from "axios";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function LoginAuth({ onButtonClick }) {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  const LoginData = {
    username: "kabali",
    password: "bullshit",
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        LoginData,
      });
      console.log("Login successful:", response.data);
      // Handle storing tokens in local storage
    } catch (error) {
      console.error("Login failed:", error);
      // Handle displaying error message to user
    }
  };

  return (
    <>
      <div className="bg-white/50 fixed inset-0 z-10">
        <section
          className={`z-50 fixed top-[5rem] bottom-auto left-0 md:left-[10rem] lg:left-[20rem] overflow-auto right-0 md:right-[10rem] lg:right-[20rem] bg-white shadow-lg rounded`}
        >
          <Link to="/">
            <button
              className="absolute top-8 right-8 text-2xl hover:opacity-50 "
              // onClick={() => setShowLogin(false)}
            >
              <LiaTimesSolid />
            </button>
          </Link>

          <h2 className="text-3xl pt-[5rem] text-center ">Log In</h2>
          <div>
            <p className="mt-3 mb-10 text-center text-[0.8rem]">
              Enter your username and password to access your account
            </p>
            <div className="flex flex-col justify-center items-center gap-[3rem]">
              <div className="flex flex-col justify-center items-center gap-[3rem]">
                <input
                  type="text"
                  placeholder="Username"
                  className="py-3 px-4 border border-black rounded w-[23rem] rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="py-3 px-4 border border-black rounded w-[23rem] rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-center mt-10 ">
              <p>Don't have an account? </p>
              <button
                className="ml-1 text-blue-700 font-semibold"
                onClick={onButtonClick}
              >
                Create an account
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="w-32 border border-black rounded-full py-2 bg-gray-500 text-white font-bold mb-10"
                onClick={handleLogin}
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginAuth;
