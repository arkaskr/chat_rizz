import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth && !authUser){

    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>

  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to="/login" />}/>
        <Route path="/signup" element={!authUser?<SignUp />:<Navigate to="/"/>} />
        <Route path="/login" element={!authUser?<Login />:<Navigate to="/"/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={authUser?<Profile />:<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
