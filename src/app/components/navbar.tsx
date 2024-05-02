"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavItemBase {
  label: string;
  href: string;
}

export const NavBar = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

  return (
    <nav className="bg-white fixed left-0 z-10 w-full backdrop-blur-md top-0">
      <div className={"p-5 flex gap-5 md:justify-normal justify-between md:ml-16"}>
        <div className="md:w-36 w-32">
          <Link href="/">
            <Image src={logo} alt="we drive logo" />
          </Link>
        </div>
        <div className="md:gap-16 gap-6 mt-3 ml-5 flex font-semibold">
          <Link href="/#about_us" className="md:hover:text-black hidden md:block">
            Sobre nós
          </Link>
          <Link href="/#services" className="md:hover:text-black hidden md:block">
            Serviços
          </Link>
          <Link href="/#faq" className="md:hover:text-black hidden md:block">
            FAQ
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511910448585&text=Ola,%20tenho%20interesse%20em%20contratar%20o%20serviço%20da%20WeDrive&type=phone_number&app_absent=0"
            className="md:hover:text-black text-xs md:text-base"
          >
            Contrate
          </Link>
          <Link href="/fale-conosco" className="md:hover:text-black text-xs md:text-base">
            Fale conosco
          </Link>
        </div>
      </div>
      <div className="border-black border" />
    </nav>
  );
};
