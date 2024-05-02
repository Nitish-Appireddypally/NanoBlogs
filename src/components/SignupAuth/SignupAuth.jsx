import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

function SignupAuth({ onButtonClick }) {
  useEffect(() => {}, []);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");

  const SignupData = {
    name: `${firstname} ${lastname}`,
    username: `${userName}`,
    password: `${password}`,
    category: ["love", "memories"],
  };

  const handleSignup = async () => {
    try {
      console.log(SignupData);
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        SignupData
      );
      const responseData = response.data;
      console.log("Signup successful:", responseData);
      Cookies.set("access_token", responseData.access_token);
      Cookies.set("refresh_token", responseData.refresh_token);
      // Cookies.set("Nitish", "RCB");
      const myAccessToken = Cookies.get("access_token");
      const myRefreshToken = Cookies.get("refresh_token");

      console.log("Access token : ", myAccessToken);
      console.log("Refresh token : ", myRefreshToken);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
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
          <h2 className="text-3xl pt-[2rem] text-center ">Sign Up</h2>
          <div>
            <p className="mt-3 mb-10 text-center text-[0.8rem]">
              Enter the credentials to create your account
            </p>
            <div className="flex flex-col justify-center items-center gap-[3rem]">
              <div className="flex justify-center items-center gap-[2rem]">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder="First Name"
                  className="py-3 px-4 border rounded w-[10.5rem] rounded-lg outline-none"
                />
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder="Last Name"
                  className="py-3 px-4 border rounded w-[10.5rem] rounded-lg outline-none"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[3rem]">
                <div className="flex justify-center items-center relative">
                  <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="py-3 px-4 border  rounded w-[23rem] rounded-lg outline-none"
                  />
                  <FaUserAlt className="absolute right-5 top-1/2 transform -translate-y-1/2 " />
                </div>
                <div className="flex justify-center items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-3 px-4 border rounded w-[23rem] rounded-lg outline-none"
                  />
                  {showPassword ? (
                    <div className="cursor-pointer">
                      <VscEye
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 "
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <VscEyeClosed
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 "
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="py-3 px-4 border rounded w-[23rem] rounded-lg outline-none"
                  />
                  {showConfirmPassword ? (
                    <div className="cursor-pointer">
                      <VscEye
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 "
                        onClick={() => {
                          setConfirmPassword(!showConfirmPassword);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <VscEyeClosed
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => {
                          setConfirmPassword(!showConfirmPassword);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10 ">
              <p>Already have an account? </p>
              <button
                className="ml-1 text-aquamarine font-semibold"
                onClick={onButtonClick}
              >
                Log In
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="w-32 border border-black rounded-full py-2 bg-customgreen text-white font-bold mb-10"
                onClick={handleSignup}
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

export default SignupAuth;
