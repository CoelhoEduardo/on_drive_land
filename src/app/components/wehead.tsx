import Image from "next/image";
import React from "react";
import bg1 from "/public/images/background1.jpg";

const Wehead: React.FC = () => {
  return (
    <header className="relative">
      <div className="w-full h-full md:h-screen mt-20 md:mt-0">
        <Image
          src={bg1}
          priority
          alt="We drive background 1"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-2 w-full md:inset-x-1/3 md:bottom-40 md:w-fit md:translate-y-1/2">
        <div
          className="text-stone-200 
        drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)] 
        text-center flex items-center  flex-col w-full"
        >
          <h1 className="text-2xl xl:text-4xl  tracking-tight text-center">
            Seu motorista <span className="font-bold">particular</span> por uma{" "}
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
