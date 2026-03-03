"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans text-black">
      <h4>MEMK</h4>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
