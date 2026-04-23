"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle  } from "flowbite-react";
import Link from "next/link";

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
      <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">UnClutter</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
      <h4>MEMK</h4>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
