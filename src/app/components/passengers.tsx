import Image from "next/image";
import men_suit from "/public/images/men_suit.jpg";
import React from "react";

const Passegers: React.FC = () => {
  return (
    <div className="h-full w-full md:w-1/2 bg-[url('/images/inter.jpg')] bg-no-repeat bg-cover  backdrop-blur-sm border shadow-2xl shrink-0">
      <div className="absolute left-32 top-32">
        <div className="flex">
          <div className="bg-black rounded-full w-5 h-5 absolute" />
          <div className="bg-black rounded-sm border w-16 h-1 mt-2" />
          <div className="bg-black rounded-full w-4 h-4 mt-0.5 absolute left-14" />
          <div className="bg-black rounded-sm border w-14 h-1 mt-2" />
          <div className="bg-black rounded-full w-3 h-3 mt-1 absolute left-28" />
        </div>
      </div>
      <div className="absolute left-[8.5rem] top-[9.3rem]">
        <div className="flex flex-col gap-3">
          <div className="border h-2 boder-gray-500" />
          <div className="border h-7 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
          <div className="border h-6 boder-gray-500" />
        </div>
      </div>
      <div className="absolute md:top-40 md:left-[28rem] left-12 top-60">
        <div className="md:h-[32rem] md:w-[26rem] h-96 w-80 relative">
          <Image
            fill
            className="bg-cover"
            src={men_suit}
            alt="men with a suit and happy"
          />
        </div>
      </div>
      <div className="absolute bottom-20 left-2 md:bottom-64 md:left-20 shrink-0">
        <div className="shadow-2xl bg-white rounded-lg shrink w-80 h-72 md:h-96 md:w-[30rem] p-3">
          <div className="flex justify-start ml-12 mt-3 md:mt-12">
            <h1 className="font-bold text-2xl md:text-4xl">
              Conforto e Conveniência
            </h1>
          </div>
          <div className="flex justify-start ml-5 mt-3 md:mt-12">
            <h2 className="text-base">
              Seja para ir do estacionamento até sua unidade residencial, ao
              clube do condomínio, ou a qualquer outra área dentro do complexo,
              estamos prontos para levá-lo onde você precisar
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passegers;
