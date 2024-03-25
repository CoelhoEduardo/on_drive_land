import Image from "next/image";
import React from "react";
import bg1 from "/public/images/background1.jpg";

const Wehead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src={bg1}
        alt="We drive background 1"
        className="w-full h-full object-cover"
      />
      <div
        className="font-bold absolute 
        z-10 text-white 
        drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] 
        text-center flex-1 flex items-center justify-end flex-col bottom-[112rem] h-72  w-full"
      >
        <h1 className="hidden">We Drive</h1>
        <h2 className="text-2xl xl:text-4xl tracking-tight">
          <span>Transporte personalizado para o seu dia</span>
        </h2>
        <div className="rounded-md flex justify-center h-12 w-32 bg-gray-900 mt-12">
          <button>Fale Conosco</button>
        </div>
      </div>
      <div className="absolute z-10 flex-1 flex items-center justify-end flex-col bottom-[80rem] h-72  w-full" />
    </div>
  );
};

export default Wehead;
