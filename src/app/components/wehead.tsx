import Image from "next/image";
import React from "react";
import header1 from "/public/images/header_desk.jpg";

const Wehead: React.FC = () => {
  return (
    <header className="relative">
      <div className="w-full h-full mt-20 md:mt-0">
        <Image
          src={header1}
          priority
          alt="We drive background 1"
          className="w-full"
        />
      </div>
      <div className="absolute bottom-2 w-full md:inset-x-1/3 md:bottom-[15rem] md:w-fit md:translate-y-1/2">
        <div
          className="text-stone-200 
        drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)] 
        text-center flex items-center  flex-col w-full"
        >
          <h1 className="text-xl xl:text-4xl  tracking-tight text-center">
            Seu motorista <span className="font-bold">particular</span>{" "}
            <br className="md:hidden" /> por uma{" "}
            <span className="font-bold">fração de custo</span>.
          </h1>
          <div
            className="rounded-md flex font-semibold hover:bg-white hover:text-black md:text-xl text-sm h-10 w-20 
            justify-center items-center md:h-12 md:w-32 bg-black mt-6"
          >
            <a href="https://linktr.ee/wedrivebrasil" target="_blank">
              Contrate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Wehead;
