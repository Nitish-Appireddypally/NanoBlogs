// BlogCard.js

import React from "react";

const BlogCard = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
