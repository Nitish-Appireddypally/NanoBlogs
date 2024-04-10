import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import { nav } from "../utils/data";

const HomeHeader = () => {
  return (
    <>
      <header className="border-b border-black sticky top-0 z-50 bg-yellow-500">
        <div className="size h-[60px] flex items-center justify-between">
          <button className="flex flex-col items-center gap-0 font-cursive">
            <span className="text-orange-500 text-2xl logo-font">
              NanoBlogs
            </span>
            {/* <span className="font-mono text-[0.7rem]">
              Explore the Blogosphere
            </span> */}
          </button>
          <div className="flex items-center justify-between">
            <a href="./write">
              <button className="mr-10 flex items-center gap-2">
                <FaRegEdit />
                Write
              </button>
            </a>
            <div className="relative flex">
              {" "}
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                {" "}
                <IoSearch />
              </div>
              <input
                className="px-8 py-2 rounded-lg"
                type="search"
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
