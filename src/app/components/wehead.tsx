import Image from "next/image";
import React from "react";
import bg1 from "/public/images/background1.jpg";

const Wehead: React.FC = () => {
  return (
    <div className="relative pt-[58%] md:pt-[38%] lg:mx-0 mt-[5.3rem]">
      <div className=" h-full w-full  absolute top-0">
        <Image
          src={bg1}
          alt="We drive background 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-[32rem] w-full md:inset-x-1/3 md:bottom-40 md:w-fit md:translate-y-1/2">
        <div
          className="font-bold text-white 
        drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] 
        text-center flex items-center  flex-col w-full"
        >
          <h1 className="hidden">We Drive</h1>
          <h2 className="text-2xl xl:text-4xl tracking-tight text-center">
            <span>Transporte personalizado para o seu dia</span>
          </h2>
          <div className="rounded-md flex hover:bg-amber-400 hover:text-gray-900 justify-center h-12 w-32 bg-gray-900 mt-12">
            <button>Fale Conosco</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wehead;
