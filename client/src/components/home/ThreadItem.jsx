import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faThumbsDown as farThumbsDown,
  faComment as farComment,
} from "@fortawesome/free-regular-svg-icons";
import meme from "../../assets/meme.png";

const ThreadItem = ({ thread }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setIsDisLiked(false);
      thread.likes = thread.likes + 1;
    }
  };

  const handledislike = () => {
    if (!isDisLiked) {
      setIsDisLiked(true);
      setIsLiked(false);
      thread.dislikes = thread.dislikes + 1;
    }
  };
  return (
    <div className="post-cont w-11/12 sm:w-4/5 mt-10 h-auto mx-auto border-2 p-3 border-gray-300 rounded-lg shadow-gray-300 shadow-md">
      <div className="flex items-center justify-between">
        <h1 id="Username-holder" className="text-lg font-bold italic">
          {`@${thread.username}`}
        </h1>
        <a className="w-auto px-3 bg-yellow-300 rounded-full text-center text-xs hover:bg-yellow-400 cursor-pointer">
          + Add
        </a>
      </div>
      <hr className="w-full mt-3"></hr>
      <div className=" w-11/12 sm:w-3/4  mx-auto mt-5">
        <img
          src={meme}
          alt="meme picture"
          className=" w-11/12 sm:w-3/4 mx-auto"
        />
      </div>
      <div className="flex caption-cont w-full mt-8 gap-3">
        <h2 className="text-base font-bold">{`${thread.username}:`}</h2>
        <p className="text-xs text-justify">{thread.caption}</p>
      </div>

      <div className="interactions-cont flex items-center justify-between w-1/2 sm:w-1/4 mx-auto mt-5 p-2 ">
        <div className="flex flex-col items-center w-1/4 p-2 gap-2">
          {isLiked ? (
            <FontAwesomeIcon
              icon={faHeart}
              className="text-lg text-yellow-500 cursor-pointer"
              onClick={handleLikeClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={farHeart}
              className="text-lg text-yellow-500 cursor-pointer"
              onClick={handleLikeClick}
            />
          )}
          <div className="flex flex-col items-center gap-0">
            <span className="text-xs">{thread.likes}</span>
            <span className=" text-xs">W's</span>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/4 p-2 gap-2 ">
          {isDisLiked ? (
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-lg text-yellow-500 cursor-pointer"
              onClick={handledislike}
            />
          ) : (
            <FontAwesomeIcon
              icon={farThumbsDown}
              className="text-lg text-yellow-500 cursor-pointer"
              onClick={handledislike}
            />
          )}
          <div className="flex flex-col items-center gap-0">
            <span className="text-xs">{thread.dislikes}</span>
            <span className=" text-xs">L's</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-1/3 p-2">
          <FontAwesomeIcon
            icon={farComment}
            className="text-lg text-yellow-500 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-0">
            <span className="text-xs">{thread.comments}</span>
            <span className=" text-xs">Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadItem;
