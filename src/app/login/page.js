"use client"; // Ensures this component is always rendered on the client side

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Login() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents mismatches during SSR

  return (
    <div
      style={{ backgroundImage: "url('/bg3.avif')" }}
      className="bg-cover bg-center h-screen flex items-center justify-center"
    >
      {/* Frosted Glass Login Box */}
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-white text-center">Welcome Back</h2>
        <p className="text-white/80 text-center mt-1">Login to continue</p>

        {/* Form */}
        <form className="mt-6">
          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded-md bg-white/20 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mt-2 text-right">
            <a href="#" className="text-blue-400 text-sm hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-white text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
