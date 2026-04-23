"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Tooltip  } from "flowbite-react";
import Link from "next/link";

export default function Navi() {
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
      <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">UnClutter</span>
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
        <NavbarLink href="#" onClick={logout}>
          <Tooltip content="Log Out" placement="bottom">
            <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
            </svg>
          </Tooltip>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
