import React from "react";
import Image from "next/image";
import men_drive from "/public/images/men_drive.jpg";

const Drive: React.FC = () => {
  return (
    <div className="h-full md:w-1/2 w-full bg-transparent bg-[url('/images/inter.jpg')] backdrop-blur-sm border mt-3 shadow-2xl">
      <div className="absolute right-32 top-32">
        <div className="flex">
          <div className="bg-black rounded-full w-4 h-4 absolute mt-0.5" />
          <div className="bg-black rounded-sm border w-16 h-1 mt-2" />
          <div className="bg-black rounded-full w-5 h-5 absolute left-14" />
          <div className="bg-black rounded-sm border w-14 h-1 mt-2" />
          <div className="bg-black rounded-full w-4 h-4 mt-0.5 absolute left-28" />
        </div>
      </div>
      <div className="absolute right-[11.5rem] top-[9.3rem]">
        <div className="flex flex-col gap-3">
          <div className="border h-2 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
        </div>
      </div>
      <div className="absolute top-48 left-12 md:left-20">
        <div className="md:h-[32rem] md:w-[26rem] h-96 w-80 relative">
          <Image
            fill
            className="bg-cover"
            src={men_drive}
            alt="men with a suit and happy"
          />
        </div>
      </div>
      <div className="absolute md:top-60 right-12 md:right-28 top-[30rem]">
        <div className="shadow-2xl bg-white rounded-lg shrink h-72 w-80 md:h-80 md:w-96 p-3">
          <div className="flex justify-start ml-12 mt-3 md:mt-12">
            <h1 className="font-bold text-3xl md:text-4xl">
              Segurança em primeiro lugar
            </h1>
          </div>
          <div className="flex justify-start ml-5 mt-5 md:mt-12">
            <h2 className="md:text-xl text-base">
              Nossos motoristas são treinados e certificados para garantir a sua
              segurança em cada viagem
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;
