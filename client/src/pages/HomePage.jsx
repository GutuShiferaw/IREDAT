import React from "react";
import { TopBar } from "../components/home/TopBar";
import { SideBar } from "../components/home/SideBar";
export const HomePage = () => {
  return (
    <div className=" flex flex-col w-screen h-screen">
      <div>
        <TopBar />
      </div>
      <div className="w-screen h-full flex ">
        <div className=" sidebar-cont h-full bg-gray-100">
          <SideBar />
        </div>
        <div className=" w-full h-full "></div>
        <div className=" info-center h-full bg-gray-100"> </div>
      </div>
    </div>
  );
};
