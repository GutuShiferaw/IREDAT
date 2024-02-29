import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { TopBar } from "../components/home/TopBar";
import { SideBar } from "../components/home/SideBar";
import meme from "../assets/meme.png";
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
        {/* Personalized Thread list updates dynamically */}
        <div className="thread-cont flex-1 overflow-y-auto w-full h-full ">
          <div className="flex w-full h-auto border-b-2 border-gray-100 p-3">
            <div className=" newthread-left justify-start  "></div>
            <div className=" flex justify-end p-2 bg-yellow-300 rounded-full  gap-2 items-center cursor-pointer hover:bg-yellow-200 ">
              <span className=" text-sm italic">New thread</span>
              <FontAwesomeIcon icon={faPen} className=" text-black text-xs" />
            </div>
          </div>
          {/* Where the Threads Go */}
          <div className=" flex flex-col w-full h-full items-center">
            <div className=" post-cont w-4/5 mt-10 h-auto mx-auto border-2 p-5 border-gray-300">
              <div className=" flex items-center justify-between">
                <h1 className=" text-lg font-bold italic"> @ Paidway_g</h1>
                <a className=" w-auto px-3  bg-yellow-200 rounded-full text-center text-xs hover:bg-yellow-400 cursor-pointer">
                  {" "}
                  Add{" "}
                </a>
              </div>
              <hr className=" w-full"></hr>
              <div className=" w-3/4 mx-auto mt-5 ">
                <img
                  src={meme}
                  alt="meme picture"
                  className=" w-3/4 mx-auto "
                />
              </div>
              <div className=" flex items-center caption-cont w-full mt-5 gap-3">
                <h2 className="text-base font-bold"> Paidwy_g:</h2>
                <p className=" text-xs "> Bro this is so relatable LOL. #fyp</p>
              </div>

              <div className="interactions-cont flex items-center justify-between w-1/2 mt-3 p-2">
                <div className=" w-1/5 p-2 bg-yellow-200">
                  {" "}
                  <p>W</p>{" "}
                </div>
                <div className=" w-1/5 p-2 bg-yellow-200">
                  {" "}
                  <p>L</p>{" "}
                </div>
                <div className=" w-1/5 p-2 bg-yellow-200">
                  {" "}
                  <p>Comments</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" info-center h-full bg-gray-100"></div>
      </div>
    </div>
  );
};
