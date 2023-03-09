import { Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";

import Home from "./../Components/Home/Home";

const WebRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
