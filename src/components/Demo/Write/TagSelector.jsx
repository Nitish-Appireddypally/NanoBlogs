import React, { useState } from "react";

const TagButton = ({ tag, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 bg-orange-500 text-white mr-2 mb-2 ${
        selected ? "bg-orange-700" : ""
      }`}
    >
      {tag}
    </button>
  );
};

const TagSelector = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ["Hello", "Bus", "Rooo", "Tag4", "Tag5"]; // Sample tags array
  console.log(selectedTags);

  const handleTagClick = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const updatedTags = [...selectedTags];
      updatedTags.splice(index, 1);
      setSelectedTags(updatedTags);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Select Tags:</h2>
      <div>
        {tags.map((tag) => (
          <TagButton
            key={tag}
            tag={tag}
            selected={selectedTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Selected Tags:</h3>
        <p>{selectedTags.join(", ")}</p>
      </div>
    </div>
  );
};

export default TagSelector;
