import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { TopBar } from "../components/home/TopBar";
import { SideBar } from "../components/home/SideBar";
import ThreadItem from "../components/home/ThreadItem"; // Import the ThreadItem component

export const HomePage = () => {
  // Dummy data for threads (replace this with your dynamic data)
  const threads = [
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },
    {
      id: 1,
      username: "Paidway_g",
      caption:
        "Spotted a meme so relatable, I practically high-fived my screen! 😆 Life's like an ongoing comedy show, and I'm just here trying to adult without a script. Every plot twist feels like it was written just for me! 🔄😅 Just when you think you've nailed this whole 'adulting' thing, reality's like, 'Hold my coffee.' Can anyone else relate or is it just me on this rollercoaster of relatability? 🎢😂 #LifeMemeMagic #FYP",
      likes: 4500,
      dislikes: 100,
      comments: 350,
    },

    // Add more thread objects as needed
  ];

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-hidden">
      <div className=" h-24">
        <TopBar />
      </div>
      <div className="w-screen h-full flex  ">
        <div className="sidebar-cont h-full bg-gray-100 bg-opacity-70">
          <SideBar />
        </div>
        <div className="thread-cont flex flex-col w-full h-full ">
          <div className="flex w-full h-16 border-b-2 border-gray-100 p-3">
            <div className="newthread-left justify-start"></div>
            <div className="flex justify-end w-20 sm:w-auto p-1  sm:p-2 bg-yellow-300 rounded-full gap-2 items-center cursor-pointer hover:bg-yellow-200">
              <span className=" text-xs sm:text-sm italic">New thread</span>
              <FontAwesomeIcon
                icon={faPen}
                className="hidden sm:inline-block text-black text-xs"
              />
            </div>
          </div>
          {/* Render each thread using the ThreadItem component */}
          <div className="posts-cont flex flex-col w-full h-full overflow-y-auto items-center pb-20">
            {threads.map((thread) => (
              <ThreadItem key={thread.id} thread={thread} />
            ))}
          </div>
        </div>
        <div className=" hidden sm:inline-block info-center h-full bg-gray-100"></div>
      </div>
    </div>
  );
};
