import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import HomeHeader from "../../Home/HomeHeader";

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
      content: [`${content}`],
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
        navigate("/home");
      }
    } catch (error) {
      console.error("Publish failed:", error);
    }
  };

  return (
    <div className="w-screen">
      <HomeHeader />
      <div className="flex flex-wrap items-center mx-5 my-5">
        {/* Display existing tags */}
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 m-1"
          >
            <span className="text-gray-800 mr-2">{tag}</span>
            <button
              onClick={() => handleTagRemove(index)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 19a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm1-13a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2zm-.293 5.293a1 1 0 1 1 1.414 1.414L11.414 11l2.293 2.293a1 1 0 1 1-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L8.586 11 6.293 8.707a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 11l2.293 2.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
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
        className="border border-gray-300 rounded p-2 mt-2 mx-5 my-5"
      />
      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Submit
      </button>
    </div>
  );
}

export default TagInput;
