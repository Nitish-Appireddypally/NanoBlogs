import React, { useState } from "react";
import Model from "../../../utils/Model";
import { LiaTimesSolid } from "react-icons/lia";
import DemoHeader from "../DemoHeader";
import { Link } from "react-router-dom";
const Auth = () => {
  const [createUser, setCreateUser] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  return (
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

        <h2 className="text-3xl pt-[5rem] text-center ">
          {createUser ? "Log In" : "Sign Up"}
        </h2>
        {createUser ? (
          <div>
            <p className="mt-3 mb-10 text-center text-[0.8rem]">
              Enter your username and password to access your account
            </p>
            <div className="flex flex-col justify-center items-center gap-[3rem]">
              <div className="flex flex-col justify-center items-center gap-[3rem]">
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="flex justify-center mt-10 ">
              <p>Don't have an account? </p>
              <button
                className="ml-1 text-blue-700 font-semibold"
                onClick={() => setCreateUser(!createUser)}
              >
                Create an account
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button className="w-32 border border-black rounded-full py-2 bg-gray-500 text-white font-bold mb-10">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mt-3 mb-10 text-center text-[0.8rem]">
              Enter your credentials to create your account
            </p>
            <div className="flex flex-col justify-center items-center gap-[3rem]">
              <div className="flex justify-center items-center gap-[2rem]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="py-3 px-4 border border-black rounded w-[10.5rem] rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="py-3 px-4 border border-black rounded w-[10.5rem] rounded-lg"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-[3rem]">
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
              </div>
            </div>

            <div className="flex justify-center mt-10 ">
              <p>Already have an account? </p>
              <button
                className="ml-1 text-blue-700 font-semibold"
                onClick={() => setCreateUser(!createUser)}
              >
                Log In
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button className="w-32 border border-black rounded-full py-2 bg-gray-500 text-white font-bold mb-10">
                Submit
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="py-3 px-4 border border-black rounded w-[23rem] rounded-lg"
      ></input>
    </>
  );
};

export default Auth;
