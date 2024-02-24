import React from "react";
import Logo from "../../assets/logo.png";
export const TopBar = () => {
  return (
    <div className=" flex w-screen border-b-2 border-grey-200">
      <div className=" nav-cont flex w-full">
        <div className=" flex w-11/12 mx-auto  h-auto items-center justify-between p-3 gap-4">
          <div className=" w-20 justify-start">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="justify-center w-2/4">
            <form>
              <input
                type="text"
                placeholder=" Search"
                className=" w-full p-2 rounded-2xl bg-gray-200"
              />
            </form>
          </div>
          <div className=" flex items-center justify-end gap-4 ">
            <div className=" flex items-center w-12 h-12 rounded-full bg-red-500">
              <div className=" w-full text-center">
                <p className="text-2xl text-white">F</p>
              </div>
            </div>
            <div className=" justify-end">
              <p className=" text-3xl">...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
