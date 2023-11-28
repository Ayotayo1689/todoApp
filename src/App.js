import "./App.css"
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LoginHome from "./pages/LoginHome";

function App() {
   return (
     <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/forgot_password" element={<ForgotPassword />} />
         <Route path="/home" element={<LoginHome />} />
      </Routes>
     </div>
    );
}
export default App;