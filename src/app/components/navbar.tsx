"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { useEffect, useState } from "react";

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
    <nav
      className={classNames(
        color ? "bg-white" : "bg-white",
        "absolute left-0 z-10 w-full backdrop-blur-md top-0",
      )}
    >
      <div className="p-5 flex gap-5 ml-16">
        <div className="w-36">
          <a href="#home">
            <Image src={logo} alt="we drive logo" />
          </a>
        </div>
        <div className="gap-16 mt-3 ml-5 md:flex hidden">
          <a href="#passengers">Passageiros</a>
          <a href="#drives">Motoristas</a>
          <a href="#about_us">Sobre nós</a>
        </div>
      </div>
      <div
        className={classNames(
          color ? "border-black" : "border-white",
          "border",
        )}
      />
    </nav>
  );
};
