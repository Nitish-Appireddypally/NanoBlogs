import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function TagInput() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue("");
    }
  };
  const handleSubmit = async (event) => {
    const { title, content } = location.state;
    const publishData = {
      title: title,
      content: [content],
      category: tags,
    };
    console.log(publishData);
    // navigate("/successpage")
    const myAccessToken = Cookies.get("access_token");
    try {
      event.preventDefault();
      console.log(publishData);
      console.log(myAccessToken);
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
        // setTitle("");
        // setDescription("");
        // setShowTagInput(true);
        // Navigate to "/tagsinput" route
        console.log("Successfully published...");
      }
    } catch (error) {
      console.error("Publish failed:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {/* Display existing tags */}
        {tags.map((tag, index) => (
          <div key={index} className="bg-gray-200 px-2 py-1 m-1 rounded">
            {tag}
          </div>
        ))}
      </div>
      {/* Input field for typing new tags */}
      <input
        type="text"
        placeholder="Type your topic and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        className="border border-gray-300 rounded p-2 mt-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Publish
      </button>
    </div>
  );
}

export default TagInput;
