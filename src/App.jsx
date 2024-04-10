import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import Auth from "./components/Demo/Auth/Auth";
import Write from "./components/Demo/Write/Write";
// import Write from "./components/Demo/Write/WriteBlogs";
import SignupAuth from "./components/SignupAuth/SignupAuth";
import LoginAuth from "./components/LoginAuth/LoginAuth";
import WriteBlogs from "./components/Demo/Write/WriteBlogs";
import TagInput from "./components/Demo/Write/TagInput";

function App() {
  // const auth = true;
  // const [tags, setTags] = useState([]);

  // const handleTagsChange = (newTags) => {
  //   setTags(newTags);
  // };

  return (
    <>
      {/* {auth ? <Home /> : <Demo />} */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Demo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/write" element={<WriteBlogs />} />
        <Route path="/tagsinput" element={<TagInput />} />
        <Route path="/signup" element={<SignupAuth />} />
        <Route path="/login" element={<LoginAuth />} />
      </Routes>
    </>
  );
}

export default App;
