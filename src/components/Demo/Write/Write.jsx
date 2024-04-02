import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import Cookies from "js-cookie";

// import Preview from "./Preview";

const Write = ({ onExitButtonClick }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const publishData = {
    title: "lanjaaa",
    content: ["content1", "content2 me"],
    category: ["Hello", "Bus", "Rooo"],
  };

  const handlePublish = async (event) => {
    // Implement your logic for publishing here
    console.log("Publish button clicked");
    const myAccessToken = Cookies.get("access_token");
    const myRefreshToken = Cookies.get("refresh_token");
    try {
      event.preventDefault();
      console.log(publishData);
      const response = await axios.post(
        "http://localhost:3000/user/blog/post",
        publishData,
        {
          headers: {
            Authorization: `Bearer ${myAccessToken}`,
          },
        }
      );
      const responseData = response.data;
      console.log(responseData);
      if (response.status === 200) {
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <section className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="text-4xl outline-none w-full"
      />
      <ReactQuill
        theme="bubble"
        value={description}
        onChange={setDescription}
        placeholder="Tell Your Story..."
        className="write my-5 "
      />

      <button
        onClick={handlePublish}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Publish
      </button>

      {/* <div
        className={`${
          publish ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-200`}
      >
        <Preview
          setPublish={setPublish}
          description={description}
          title={title}
        />
      </div> */}
    </section>
  );
};

export default Write;
