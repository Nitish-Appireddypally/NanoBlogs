// import React from "react";
// import { IoSearch } from "react-icons/io5";
// import { FaRegEdit } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import { nav } from "../utils/data";

// const HomeHeader = () => {
//   return (
//     <>
//       <header className="border-b border-black sticky top-0 z-50 bg-yellow-500">
//         <div className="size h-[60px] flex items-center justify-between">
//           <button className="flex flex-col items-center gap-0 font-cursive">
//             <span className="text-orange-500 text-2xl logo-font">
//               NanoBlogs
//             </span>
//             {/* <span className="font-mono text-[0.7rem]">
//               Explore the Blogosphere
//             </span> */}
//           </button>
//           <div className="flex items-center justify-between">
//             <a href="./write">
//               <button className="mr-10 flex items-center gap-2">
//                 <FaRegEdit />
//                 Write
//               </button>
//             </a>
//             <div className="relative flex">
//               {" "}
//               <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                 {" "}
//                 <IoSearch />
//               </div>
//               <input
//                 className="px-8 py-2 rounded-lg"
//                 type="search"
//                 placeholder="Search"
//               ></input>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HomeHeader;
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../utils/data";

const HomeHeader = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/home"
            className="flex items-center gap-1 text-gray-800 font-semibold"
          >
            <span className="text-xl">NanoBlogs</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link
            to="/write"
            className="flex items-center gap-2 text-lg text-gray-800 hover:text-gray-900 transition duration-300"
          >
            <FaRegEdit className="text-xl" />
            Write
          </Link>
          <div className="relative flex items-center">
            <IoSearch className="absolute left-0 ml-3 text-gray-600" />
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
