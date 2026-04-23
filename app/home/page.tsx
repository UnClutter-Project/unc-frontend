"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card } from "flowbite-react";
import Navi from "../navbar/navigation";

export default function Home() {

  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  const colors = [
  { name: "black", hex: "#000000" },
  { name: "white", hex: "#ffffff" },
  { name: "red", hex: "#ef4444" },
  { name: "blue", hex: "#3b82f6" },
];

  return (
    <div className="min-h-screen bg-kreme font-sans text-black">
      <Navi />
      <section style={{ width: "90%", justifyContent: "center", margin: "0 auto", maxWidth: "1200px" }}>
      <h3 className="text-2xl font-bold mb-2 mt-4 px-4">Upper</h3>
      <div className="grid grid-cols-4 gap-1">
        <Card className="max-w-sm my-2"
        imgSrc="https://contents.mediadecathlon.com/p1901236/k$2836c12f148eea1c5e31429acfb405be/t-shirt-katun-murni-fitness-sportee-hitam-domyos-8572641.jpg?f=1920x0&format=auto">
          <h5 className="text-2xl font-bold">BAJU</h5>
          <div className="flex gap-1.5 items-center">
            {colors.map((colors, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border border-black"
                style={{ backgroundColor: colors.hex }}
              />
            ))}
          </div>
        </Card>
        <Card className="max-w-sm my-2"
        imgSrc="https://contents.mediadecathlon.com/p1901236/k$2836c12f148eea1c5e31429acfb405be/t-shirt-katun-murni-fitness-sportee-hitam-domyos-8572641.jpg?f=1920x0&format=auto">
          <h5 className="">BAJU</h5>
        </Card>
        <Card className="max-w-sm my-2"
        imgSrc="https://contents.mediadecathlon.com/p1901236/k$2836c12f148eea1c5e31429acfb405be/t-shirt-katun-murni-fitness-sportee-hitam-domyos-8572641.jpg?f=1920x0&format=auto">
          <h5 className="">BAJU</h5>
        </Card>
        <Card className="max-w-sm my-2"
        imgSrc="https://contents.mediadecathlon.com/p1901236/k$2836c12f148eea1c5e31429acfb405be/t-shirt-katun-murni-fitness-sportee-hitam-domyos-8572641.jpg?f=1920x0&format=auto">
          <h5 className="">BAJU</h5>
        </Card>
        <Card className="max-w-sm my-2"
        imgSrc="https://contents.mediadecathlon.com/p1901236/k$2836c12f148eea1c5e31429acfb405be/t-shirt-katun-murni-fitness-sportee-hitam-domyos-8572641.jpg?f=1920x0&format=auto">
          <h5 className="">BAJU</h5>
        </Card>
      </div>
      </section>
    </div>
  );
}
