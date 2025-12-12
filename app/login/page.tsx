"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Loginin = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please enter both username or password");
      return;
    };

    // Simulate login logic
    if (username === "user" && password === "pass") {
      // Redirect to dashboard or home page
      setError("memk");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form onSubmit={Loginin}>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              LOGIN
            </span>
            <input
              type="text"
              className={`block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2 ${error ? 'border-red-500 bg-red-50' : ''}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username / Email"
            />
            <input
              type="password"
              className={`block bg-transparent text-black col-span-3 border rounded-sm p-2 ${error ? 'border-red-500 bg-red-50' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && (<p className="col-span-3 text-red-500 text-left">{error}</p>
            )}
            <Link className="text-coklat " href="/forgot">
              Forgot Password?
            </Link>
            <button
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px]"
            >
              Sign In
            </button>
            <div className="col-span-3 flex items-center justify-center w-full gap-4">
              <hr className="grow" />
              <span className="text-black flex-none">
                Don't Have an Account?
              </span>
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px]"
              href="/register"
            >
              Join Now
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
