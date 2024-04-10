// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import axios from "axios";
// import Cookies from "js-cookie";
// // import { c } from "vite/dist/node/types.d-AKzkD8vd";
// import { Link } from "react-router-dom";
// import TagInput from "./TagInput";
// // import Preview from "./Preview";

// const Write = ({ tags }) => {
//   const [description, setDescription] = useState("");
//   const [title, setTitle] = useState("");
//   const contentWithoutTags = description.replace(/<[^>]+>/g, "");
//   const [showTagInput, setShowTagInput] = useState(false);
//   const publishData = {
//     title: `${title}`,
//     content: [`${contentWithoutTags}`],
//     category: tags,
//   };

//   const handlePublish = async (event) => {
//     // Implement your logic for publishing here
//     console.log("Publish button clicked");
//     const myAccessToken = Cookies.get("access_token");
//     const myRefreshToken = Cookies.get("refresh_token");
//     try {
//       event.preventDefault();
//       // console.log(contentWithoutTags);
//       console.log(publishData);
//       const response = await axios.post(
//         "http://localhost:3000/user/blog/post",
//         publishData,
//         {
//           headers: {
//             Authorization: `Bearer ${myAccessToken}`,
//           },
//         }
//       );
//       const responseData = response.data;
//       console.log(responseData);
//       if (response.status === 200) {
//         setTitle("");
//         setDescription("");
//         // setSelectedTags([]);
//         setShowTagInput(true);
//         window.location.href = "/tagsinput";
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       <section className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]">
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           type="text"
//           placeholder="Title"
//           className="text-4xl outline-none w-full"
//         />
//         <ReactQuill
//           theme="bubble"
//           value={description}
//           onChange={setDescription}
//           placeholder="Tell Your Story..."
//           className="write my-5 "
//         />

//         <button
//           onClick={handlePublish}
//           // {showTagInput && (
//           //   <a href="./taginput">
//           //     <TagInput tags={tags} onTagsChange={handleTagsChange} />
//           //   </a>
//           // )}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Publish
//         </button>

//         {/* <div
//         className={`${
//           publish ? "visible opacity-100" : "invisible opacity-0"
//         } transition-all duration-200`}
//       >
//         <Preview
//           setPublish={setPublish}
//           description={description}
//           title={title}
//         />
//       </div> */}
//       </section>
//       {/* <TagSelector
//       // selectedTags={selectedTags}
//       // setSelectedTags={setSelectedTags}
//       /> */}
//     </div>
//   );
// };

// export default Write;

import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import TagInput from "./TagInput";

const Write = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [showTagInput, setShowTagInput] = useState(false);
  const content = description.replace(/<[^>]+>/g, "");
  const navigate = useNavigate();

  const handlePublish = () => {
    navigate("/tagsinput", {
      state: { title, content },
    });
  };

  // const publishData = {
  //   title: `${title}`,
  //   content: [`${contentWithoutTags}`],
  //   category: tags,
  // };

  // const handlePublish = async (event) => {
  //   console.log("Publish button clicked");
  //   const myAccessToken = Cookies.get("access_token");
  //   try {
  //     event.preventDefault();
  //     console.log(publishData);
  //     const response = await axios.post(
  //       "http://localhost:3000/user/blog/post",
  //       publishData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${myAccessToken}`,
  //         },
  //       }
  //     );
  //     const responseData = response.data;
  //     console.log(responseData);
  //     if (response.status === 200) {
  //       setTitle("");
  //       setDescription("");
  //       setShowTagInput(true);
  //       // Navigate to "/tagsinput" route
  //       navigate("/tagsinput");
  //     }
  //   } catch (error) {
  //     console.error("Publish failed:", error);
  //   }
  // };

  return (
    <div className="flex items-center">
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

        {/* Conditionally render TagInput */}
        {/* {showTagInput && <TagInput tags={tags} />} */}
      </section>
    </div>
  );
};

export default Write;
