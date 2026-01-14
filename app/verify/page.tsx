"use client";

import Link from "next/link";
import { useState } from "react";

export default function verify() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  
  const 忘れた = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if(!email) {
      setError("Please enter a valid email/Username");
      return;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form onSubmit={忘れた}>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              Verify pls check ur email
            </span>
            <input
              type="text"
              value={email}
              className="block bg-transparent text-black col-span-3 border rounded-sm p-2"
              placeholder="Username / Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (<p className="col-span-3 text-red-500 text-left">{error}</p>
            )}
            <button
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px] duration-200"
            >
              Reset Password
            </button>
            <div className="col-span-3 flex items-center justify-center w-full gap-4">
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px] duration-200"
              href="/login"
            >
              Back
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
