import React, { useState } from "react";
import Write from "./Write";
import TagInput from "./TagInput";

const WriteBlogs = () => {
  // const [selectedTags, setSelectedTags] = useState([]);

  // const handleTagSelection = (tags) => {
  //   setSelectedTags(tags);
  // };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };
  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  return (
    <div className="flex items-center">
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 mb-4 md:mb-0 md:mr-4">
        <Write
          title={title}
          content={content}
          onTitleChange={handleContentChange}
          onContentChange={handleContentChange}
        />
      </div>
    </div>
  );
};

export default WriteBlogs;
