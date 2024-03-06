import React from "react";
import Image from "next/image";
import men_phone from "/public/images/men_phone.png";

const AboutUs: React.FC = () => {
  return (
    <div className="h-full w-full mt-5 md:w-1/2 bg-transparent bg-[url(/images/inter.jpg)]  backdrop-blur-sm border shadow-2xl">
      <div className="absolute left-32 top-32">
        <div className="flex">
          <div className="bg-black rounded-full w-3 h-3 absolute mt-1 " />
          <div className="bg-black rounded-sm border w-16 h-1 mt-2" />
          <div className="bg-black rounded-full w-4 h-4 mt-0.5 absolute left-14" />
          <div className="bg-black rounded-sm border w-14 h-1 mt-2" />
          <div className="bg-black rounded-full w-5 h-5 absolute left-28" />
        </div>
      </div>
      <div className="absolute left-[15.5rem] top-[9.3rem]">
        <div className="flex flex-col gap-3">
          <div className="border h-2 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
        </div>
      </div>
      <div className="absolute right-12 top-52  md:right-20 md:top-48">
        <div>
          <Image src={men_phone} alt="men with a phone" />
        </div>
      </div>
      <div className="absolute md:bottom-[21rem] md:left-5 bottom-20 left-5">
        <div className="shadow-2xl bg-white rounded-lg shrink h-72 w-80 md:h-96 md:w-[30rem] p-3">
          <div className="flex justify-start ml-12 mt-3 md:mt-12">
            <h1 className="font-bold text-2xl md:text-4xl">
              Facilidade de uso
            </h1>
          </div>
          <div className="flex justify-start ml-5 mt-3 md:mt-12">
            <h2 className="md:text-xl text-base">
              Nosso aplicativo intuitivo permite que você solicite uma corrida
              com apenas alguns cliques, tornando sua experiência de transporte
              dentro do seu condomínio simples e eficiente.
            </h2>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutUs;
