"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navi from "../navbar/navigation";

export default function Home() {

  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  const logout = () => {
    // Remove token
    localStorage.removeItem("token");

    // Optional: remove user info
    localStorage.removeItem("user");

    // Redirect to login
    router.replace("/login");
  };

  return (
    <div className="bg-putih font-sans text-black">
      <Navi />
      <h4>MEMK</h4>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
