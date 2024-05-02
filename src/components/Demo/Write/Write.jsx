// // import React, { useState } from "react";
// // import ReactQuill from "react-quill";
// // import axios from "axios";
// // import Cookies from "js-cookie";
// // // import { c } from "vite/dist/node/types.d-AKzkD8vd";
// // import { Link } from "react-router-dom";
// // import TagInput from "./TagInput";
// // // import Preview from "./Preview";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../Home/HomeHeader";

const Write = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handlePublish = () => {
    navigate("/tagsinput", {
      state: { title, content: description.replace(/<[^>]+>/g, "") },
    });
  };

  return (
    <div className="w-screen">
      <HomeHeader />
      <div className="flex justify-center items-center h-full">
        <section className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg mt-20">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="w-full py-2 px-3 mb-4 text-lg text-gray-800 placeholder-gray-500 border-b-2 border-gray-300 outline-none focus:border-blue-500"
          />
          <ReactQuill
            theme="bubble"
            value={description}
            onChange={setDescription}
            placeholder="Tell Your Story..."
            className="write mb-4"
            style={{ minHeight: "100px" }}
          />

          <button
            onClick={handlePublish}
            className="w-30 bg-green-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Publish
          </button>
        </section>
      </div>
    </div>
  );
};

export default Write;
