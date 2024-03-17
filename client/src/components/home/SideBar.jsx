import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFire, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className=" flex sm:h-full w-full border-r-2 border-gray-100">
      <div className="flex flex-col w-full mt-10">
        <ul className=" w-full">
          <Link to="/">
            <div className="   w-full text-base mb-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md ">
              <div className="flex items-center gap-2 w-3/4 mx-auto">
                {" "}
                <FontAwesomeIcon icon={faHome} className=" text-yellow-500" />
                <li className=" hidden sm:inline-block">Home</li>
              </div>
            </div>
          </Link>
          <div className=" text-base mb-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md">
            <div className=" flex items-center gap-2 w-3/4 mx-auto">
              {" "}
              <FontAwesomeIcon icon={faFire} className=" text-yellow-500" />
              <li className=" hidden sm:inline-block">Trending</li>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base p-2 cursor-pointer hover:bg-gray-200 rounded-md">
            {" "}
            <div className=" flex items-center gap-2 w-3/4 mx-auto">
              {" "}
              <FontAwesomeIcon icon={faComments} className=" text-yellow-500" />
              <li className=" hidden sm:inline-block">Threads</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
