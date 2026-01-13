"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erroruser, setErrorUser] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorpass, setErrorPass] = useState("");
  const [error, setError] = useState("");

  const レジスター = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorUser("");

    setErrorPass("");
    setError("");

    if (!username){
      setErrorUser("Please enter your username u dumbass");
    };
    if (username == "user"){
      setErrorUser("Choose a different username lah");
    };
    if (!email){
      setErrorEmail("Enter your email bro");
    };
    if (email == "user@gmail.com") {
      setErrorEmail("Email is already taken bro");
      return;
    }
    if (password !== confirmPassword) {
      setErrorPass("Passwords do not match");
  }};

  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form onSubmit={レジスター}>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              Create an Account
            </span>
            <div className="col-span-3"> 
              <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`block w-full bg-transparent text-black border rounded-sm p-2 ${erroruser ? "border-red-500 bg-red-50" : ""} `}
              placeholder="Username"
              />
              {erroruser && (<p className="mt-1 text-red-500 text-left">{erroruser}</p>
              )}
            </div>
            <div className="col-span-3"> 
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full bg-transparent text-black border rounded-sm p-2 ${erroremail ? "border-red-500 bg-red-50" : ""} `}
                placeholder="Email"
              />
              {erroremail && (<p className="mt-1 text-red-500 text-left">{erroremail}</p>
              )}
            </div>
            <select
              id="gender"
              className="block bg-transparent text-black col-span-2 border rounded-sm mb-2 p-2"
              defaultValue="gender"
            >
              <option value="gender" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              className="block bg-transparent text-black col-span-1 border rounded-sm p-2"
              placeholder="date of birth"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block bg-transparent text-black col-span-3 border rounded-sm p-2 ${errorpass ? "border-red-500 bg-red-50" : ""}`}
              placeholder="Password"
            />
            <div className="col-span-3">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block w-full bg-transparent text-black border rounded-sm p-2 ${errorpass ? "border-red-500 bg-red-50" : ""}`}
                placeholder="Confirm password"
              />
              {errorpass && (<p className="mt-1 text-red-500 text-left">{errorpass}</p>
              )}
            </div>
            
            <button
              className="col-span-3 flex h-12 my-2 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px] duration-200"
              
              >
              Create Account
            </button>
            <div className="col-span-3 my flex items-center justify-center w-full gap-4">
              <hr className="grow" />
              <span className="text-black flex-none">
                Already Have an Account?
              </span>
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px] duration-200"
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
