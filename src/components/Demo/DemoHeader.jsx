import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../utils/data";
import Auth from "./Auth/Auth";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);
  return (
    <header
      className={`border-b border-black sticky top-0 z-50 ${
        isActive ? "bg-white" : "bg-gray-400"
      } transition-all duration-500`}
    >
      <div className="size h-[70px] flex items-center justify-between">
        <div className="">
          <button className="flex flex-col items-center gap-0 font-cursive">
            <span className="text-orange-500 text-2xl" class="logo-font">
              NanoBlogs
            </span>
            <span className="font-mono text-[0.7rem]">
              Explore the Blogosphere
            </span>
          </button>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {console.log(link)}
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            {/* <Link to="./Auth"> */}

            <a href="./Auth">
              <button
                className="hidden text-sm sm:flex items-center gap-5"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </a>
          </div>
          <button
            className={`rounded-full text-white px-3 p-2 text-sm font-medium
          ${isActive ? "bg-green-700" : "bg-black"}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
export default DemoHeader;
