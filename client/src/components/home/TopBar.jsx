import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export const TopBar = () => {
  return (
    <div className=" flex w-screen border-b-2 border-grey-200">
      <div className=" nav-cont flex w-full">
        <div className=" flex w-full sm:w-11/12 mx-auto  h-auto items-center justify-between p-3 gap-4">
          <div className=" w-14 sm:w-20 justify-start">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="justify-center w-9/12 sm:w-2/4">
            <form>
              <input
                type="text"
                placeholder="Search People .."
                className=" w-full p-1 sm:p-2 rounded-2xl bg-gray-100 "
              />
            </form>
          </div>
          <div className=" flex items-center justify-end gap-2 sm:gap-3 ">
            <Link to="/profile">
              <div className=" flex items-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-red-500 cursor-pointer">
                <div className=" w-full text-center">
                  <p className=" text-base sm:text-xl text-white">F</p>
                </div>
              </div>
            </Link>
            <div className=" justify-end">
              <p className=" hidden sm:inline-block sm:text-3xl">...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
