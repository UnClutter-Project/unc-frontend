"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erroruser, setErrorUser] = useState("");
  const [errorpass, setErrorPass] = useState("");
  const [error, setError] = useState("");

  const ログイン = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorUser("");
    setErrorPass("");
    setError("");

    try {
      const response = await axios.post('https://unc-backend-azurerad1832-sdqpv9hb.apn.leapcell.dev/api/v0/users/login', {
        username: username,
        password: password,
      });
      console.log(response)
      window.location.href = "/home";
    } catch (error) {
      setError("Username or Password is incorrect");
      return;
    }
    if (!username) {
      setErrorUser("Please enter your username");
      return;
    };
    if (!password) {
      setErrorPass("Please enter your password");
      return;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form onSubmit={ログイン}>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              LOGIN
            </span>
            <div className="col-span-3"> 
              <input
                type="text"
                className={`block w-full bg-transparent text-black border rounded-sm p-2  ${erroruser ? 'border-red-500 bg-red-50' : ''} ${error ? 'border-red-500 bg-red-50' : ''}`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username / Email"
              />
              {erroruser && (<p className="text-red-500 text-left mt-1">{erroruser}</p>
              )}
            </div>

            <div className="col-span-3"> 
              <input
              type="password"
              className={`block w-full bg-transparent text-black border rounded-sm p-2 ${errorpass ? 'border-red-500 bg-red-50' : ''} ${error ? 'border-red-500 bg-red-50' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errorpass && (<p className=" text-red-500 text-left mt-1">{errorpass}</p>
            )}
            </div>
            {error && (<p className="col-span-3 text-red-500 text-left">{error}</p>
            )}
            <Link className="text-coklat col-span-3 text-left hover:text-putih duration-200" href="/forgot">
              Forgot Password?
            </Link>
            <button
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px] duration-200"
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
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px] duration-200"
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
