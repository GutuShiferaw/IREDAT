import React from "react";
import Logo from "../assets/logo.png";

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-Loginbg">
      <div className="flex flex-col items-center justify-center w-2/4 h-3/4 bg-white rounded-lg">
        <div className="image-cont w-36 mb-10">
          <img src={Logo} alt="Logo img" className="w-full h-auto" />
        </div>
        <div className="flex flex-col items-center w-3/4">
          <form action="#" className="w-full text-center mb-5">
            <input
              type="text"
              placeholder="User-name"
              className="border-black border-2 rounded-2xl mb-5 w-4/5 p-2 text-center text-sm italic"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border-black border-2 rounded-2xl mb-5  w-4/5 p-2 text-center italic text-sm"
              required
            />
            <button
              type="submit"
              className="  p-2 bg-black  w-4/5 text-white rounded-2xl"
            >
              Log In
            </button>
          </form>
        </div>
        <div>
          <p className=" text-sm">
            If you don't have an account yet,{" "}
            <span>
              {" "}
              <a
                href="/signup"
                className=" underline font-bold text-blue-600 italic "
              >
                {" "}
                Create Account here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
