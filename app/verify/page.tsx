"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import axios from "axios";  

export default function Verify() {

    const verify = async (codeId: string | null) => {
      try{
        const response = await axios.post('https://unc-backend-azurerad1832-sdqpv9hb.apn.leapcell.dev/api/v0/users/verify', {
            code: codeId,
          });
          console.log(response)
        }
        catch(error) {
          console.log(error)
          return;
      };
    }

    React.useEffect(() => { 
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString)
      const codeId = params.get("code")
      if(codeId != ""){
        verify(codeId)
      }
      }, []);
      
    

  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              Verify pls check ur email
              {}
            </span>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px] duration-200"
              href="/login"
            >
              Back
            </Link>
          </div>
      </main>
    </div>
  );
}
