import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import Auth from "./components/Demo/Auth/Auth";
import Write from "./components/Demo/Write/Write";
// import SignupAuth from "./components/SignupAuth/SignupAuth";
// import LoginAuth from "./components/LoginAuth/LoginAuth";

function App() {
  const auth = true;

  return (
    <>
      {/* {auth ? <Home /> : <Demo />} */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Demo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/write" element={<Write />} />
        {/* <Route path="/signup" element={<SignupAuth />} />
        <Route path="/login" element={<LoginAuth />} /> */}
      </Routes>
    </>
  );
}

export default App;
