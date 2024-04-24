"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export const NavBar = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

  return (
    <nav className="bg-white fixed left-0 z-10 w-full backdrop-blur-md top-0">
      <div className={"p-5 flex gap-5 ml-16"}>
        <div className="w-36">
          <Link href="/">
            <Image src={logo} alt="we drive logo" />
          </Link>
        </div>
        <div className="gap-16 mt-3 ml-5 md:flex hidden font-semibold">
          <Link href="#about_us" className="md:hover:text-black">
            Sobre nós
          </Link>
          <Link href="#services" className="md:hover:text-black">
            Serviços
          </Link>
          <Link href="#faq" className="md:hover:text-black">
            FAQ
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511910448585&text=Tenho%20interesse%20em%20contratar%20o%20serviço%20da%20WeDrive&type=phone_number&app_absent=0"
            className="md:hover:text-black"
          >
            Contrate
          </Link>
          <Link
            href="/fale-conosco"
            className="md:hover:text-black"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
      <div className="border-black border" />
    </nav>
  );
};
