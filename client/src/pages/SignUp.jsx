import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData["re-password"]) {
      setError("Passwords do not match!");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorMessage = await res.json();
        throw new Error(errorMessage.message);
      }

      const data = await res.json();
      setLoading(false);
      setError(null);
      setSuccessMessage("User created successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-Loginbg">
      <div className="flex flex-col items-center justify-center w-2/4 h-3/4 bg-white rounded-lg">
        <div className="image-cont w-36 mb-10">
          <img src={Logo} alt="Logo img" className="w-full h-auto" />
        </div>
        <div className="flex flex-col items-center w-3/4">
          <form onSubmit={handleSubmit} className="w-full text-center mb-5">
            <input
              type="email"
              id="email"
              placeholder=" Enter your email"
              className="border-black border-2 rounded-2xl mb-5 w-4/5 p-2 text-center text-sm italic"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              id="username"
              placeholder=" Create a user-name"
              className="border-black border-2 rounded-2xl mb-5 w-4/5 p-2 text-center text-sm italic"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder=" Enter a password"
              className="border-black border-2 rounded-2xl mb-5  w-4/5 p-2 text-center italic text-sm"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              id="re-password"
              placeholder=" Re-enter password"
              className="border-black border-2 rounded-2xl mb-5  w-4/5 p-2 text-center italic text-sm"
              required
              onChange={handleChange}
            />
            <button
              disabled={loading}
              type="submit"
              className="  p-2 bg-black  w-4/5 text-white rounded-2xl"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div>
          <p className=" text-sm">
            If you Already have an account ,{" "}
            <span>
              {" "}
              <a
                href="/login"
                className=" underline font-bold text-blue-600 italic "
              >
                {" "}
                Log In here
              </a>
            </span>
          </p>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
        {successMessage && (
          <p className="text-red-500 mt-5">{successMessage}</p>
        )}
      </div>
    </div>
  );
};
