"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Carousel } from "flowbite-react";
import Navi from "../navbar/navigation";

export default function Home() {

  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-putih font-sans text-black">
      <Navi />
      <div className="h-12 bg-coklat">
        <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
      </div>
    </div>
  );
}
