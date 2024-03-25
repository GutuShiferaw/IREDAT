import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
export const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log("daata", errorData);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className=" login-cont flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-2/4 h-3/4 bg-white rounded-lg">
        <div className="image-cont w-36 mb-10">
          <img src={Logo} alt="Logo img" className="w-full h-auto" />
        </div>
        <div className="flex flex-col items-center w-3/4">
          <form onSubmit={handleSubmit} className="w-full text-center mb-5">
            <input
              type="text"
              id="username"
              placeholder="User name"
              className="border-black border-2 rounded-2xl mb-5 w-4/5 p-2 text-center text-sm italic"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border-black border-2 rounded-2xl mb-5  w-4/5 p-2 text-center italic text-sm"
              required
              onChange={handleChange}
            />
            <button
              disabled={loading}
              type="submit"
              className="  p-2 bg-black  w-4/5 text-white rounded-2xl"
            >
              {loading ? "Loading..." : "Sign In"}
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
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
};
