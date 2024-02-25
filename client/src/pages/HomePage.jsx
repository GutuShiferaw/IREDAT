import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { TopBar } from "../components/home/TopBar";
import { SideBar } from "../components/home/SideBar";
export const HomePage = () => {
  return (
    <div className=" flex flex-col w-screen h-screen">
      <div>
        <TopBar />
      </div>
      <div className="w-screen h-full flex ">
        <div className=" sidebar-cont h-full bg-gray-100 bg-opacity-70">
          <SideBar />
        </div>
        <div className="thread-cont w-full h-full ">
          <div className="flex w-full h-auto border-b-2 border-gray-100 p-3">
            <div className=" newthread-left justify-start  "></div>
            <div className=" flex justify-end p-2 bg-yellow-300 rounded-full  gap-2 items-center cursor-pointer hover:bg-yellow-200 ">
              <span className=" text-sm italic">New thread</span>
              <FontAwesomeIcon icon={faPen} className=" text-black text-xs" />
            </div>
          </div>
        </div>
        <div className=" info-center h-full bg-gray-100"> </div>
      </div>
    </div>
  );
};
