import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import Auth from "./components/Demo/Auth/Auth";

function App() {
  const auth = false;

  return (
    <>
      {auth ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
