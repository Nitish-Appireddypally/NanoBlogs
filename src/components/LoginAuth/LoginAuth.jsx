import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";

function LoginAuth({ onButtonClick }) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const LoginData = {
    username: `${userName}`,
    password: `${passWord}`,
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      console.log(LoginData);
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        LoginData
      );
      const responseData = response.data;
      console.log(response);
      if (response.status === 200) {
        setisLoggedin(true);
        // window.location.href = "/home";
        navigate("/home");
        console.log("Login successful:", responseData);
        Cookies.set("access_token", responseData.access_token);
        Cookies.set("refresh_token", responseData.refresh_token);
        const myAccessToken = Cookies.get("access_token");
        const myRefreshToken = Cookies.get("refresh_token");

        console.log("Access token : ", myAccessToken);
        console.log("Refresh token : ", myRefreshToken);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      {/* Redirect to /home if redirectToHome is true */}
      <div className="bg-gray-200 fixed inset-0 z-10">
        <section
          className={`z-50 fixed top-[5rem] bottom-auto left-0 md:left-[10rem] lg:left-[20rem] overflow-auto right-0 md:right-[10rem] lg:right-[20rem] bg-transparent opacity-80 shadow-xl rounded-2xl shadow-out`}
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
                <div className="flex justify-center items-center relative">
                  <input
                    type="text"
                    value={userName}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                    className="py-3 px-4 border rounded w-[23rem] rounded-lg outline-none"
                  />
                  <FaUserAlt className="absolute right-5 top-1/2 transform -translate-y-1/2 " />
                </div>
                <div className="flex justify-center items-center relative">
                  <input
                    type="password"
                    value={passWord}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="py-3 px-4 border rounded w-[23rem] rounded-lg outline-none"
                  />
                  <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 " />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10 ">
              <p>Don't have an account? </p>
              <button
                className="ml-1 text-aquamarine font-semibold"
                onClick={onButtonClick}
              >
                Create an account
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="w-32 rounded-full py-2 bg-customgreen text-white font-bold mb-10 box-shadow-custom outline-none "
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
