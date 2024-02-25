import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFire, faComments } from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  return (
    <div className=" flex h-full w-full border-r-2 border-gray-100">
      <div className="flex flex-col mt-10">
        <ul className=" px-8">
          <div className=" flex items-center gap-2 text-lg mb-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md ">
            <FontAwesomeIcon icon={faHome} className=" text-yellow-500" />
            <li>Home</li>
          </div>
          <div className="flex items-center gap-2 text-lg mb-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={faFire} className=" text-yellow-500" />
            <li>Trending</li>
          </div>
          <div className="flex items-center gap-2 text-lg p-2 cursor-pointer hover:bg-gray-200 rounded-md">
            {" "}
            <FontAwesomeIcon icon={faComments} className=" text-yellow-500" />
            <li>My Threads</li>
          </div>
        </ul>
      </div>
    </div>
  );
};
