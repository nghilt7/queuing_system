import { Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";

import Home from "./../Components/Home/Home";
import ForgotPassword from "./../Components/Auth/ForgotPassword";
import Profile from "./../Components/Auth/Profile";

const WebRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
