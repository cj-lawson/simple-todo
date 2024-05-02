import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useState, useEffect } from "react";
import useTodoStore from "../store/useTodoStore";

// components
import Navbar from "../components/Navbar";

const AccountSettings = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  //Zustand store
  const { userName } = useTodoStore();
  console.log(userName);

  return (
    <div className="flex w-full flex-col justify-center bg-[#1c1c1c]">
      <div className="mb-12 mt-2 flex w-full justify-center">
        <div className="w-5/6 md:mx-8 md:w-full">
          <Navbar name={name} />
          <h1>testing</h1>
        </div>
      </div>
      <div className="flex justify-center pt-10 text-primary-white"></div>
    </div>
  );
};

export default AccountSettings;
