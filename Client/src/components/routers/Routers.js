import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Register2 from "../auth/Register2";
import Dashboard from "../dashboard/Dashboard";
import Alert from "../layouts/Alert";


import Landing from "../layouts/Landing";

export const Routers = () => {
  return (
    <>
    <Alert></Alert>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register2></Register2>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </>
  );
};
