"use client"; // Ensures this runs on the client side

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR hydration errors

  return (
    <div
      style={{ backgroundImage: "url('/bg3.avif')" }}
      className="bg-cover bg-center h-screen flex items-center justify-center"
    >
      {/* Frosted Glass Signup Box */}
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-white text-center">Create Account</h2>
        <p className="text-white/80 text-center mt-1">Join us today!</p>

        {/* Form */}
        <form className="mt-6">
          {/* Name Input */}
          <div>
            <label className="text-white block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mt-4">
            <label className="text-white block mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
