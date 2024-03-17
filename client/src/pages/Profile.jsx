import React from "react";
import { SideBar } from "../components/home/SideBar";
import { TopBar } from "../components/home/TopBar";
export const Profile = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-hidden">
      <div>
        <TopBar />
      </div>
      <div className="w-screen h-full flex">
        <div className="sidebar-cont h-full bg-gray-100 bg-opacity-70">
          <SideBar />
        </div>
        <div className="profile-cont flex flex-col w-full h-full ">
          <div className=" flex mt-5 h-20 w-full">
            <div className=" pfp-cont w-20 h-20 mx-auto rounded-full bg-yellow-300 "></div>
          </div>
          <div className=" username-cont w-full text-center mt-3">
            <h1 className=" font-bold text-lg italic">@Paidway_g</h1>
          </div>
          <div className=" w-full mt-3">
            <div className="bio-cont w-4/5 mx-auto ">
              <p className=" text-center text-sm">
                Got no friends only got poeple around me !!
              </p>
            </div>
          </div>
          <div className=" stats-cont w-full  mt-7">
            <div className=" w-11/12 sm:w-3/5 flex items-center justify-between mx-auto">
              <div className=" px-3 py-1 bg-yellow-100 rounded-xl text-xs sm:text-sm font-bold">
                {" "}
                <span>10</span> <span>Posts</span>{" "}
              </div>
              <div className="px-3 py-1 bg-yellow-100 rounded-xl text-xs sm:text-sm font-bold">
                <span>200</span> <span>Followers</span>{" "}
              </div>
              <div className="px-3 py-1 bg-yellow-100 rounded-xl text-xs sm:text-sm font-bold">
                <span>300</span> <span>Following</span>{" "}
              </div>
            </div>
          </div>
          <hr className=" w-full mt-5"></hr>

          <div className="mythreads-cont w-full h-full overflow-y-auto"></div>
        </div>
        <div className=" hidden sm:inline-block info-center h-full bg-gray-100"></div>
      </div>
    </div>
  );
};
