import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { GiCaptainHatProfile, GiSmartphone } from "react-icons/gi";
import { BsHeadset } from "react-icons/bs";

type Props = { id: string };

const AboutUs: React.FC<Props> = (props) => {
  return (
    <section id={props.id} className={`flex flex-col text-3xl md:text-4xl`}>
      <h2 className="text-amber-400 text-center">Conheça a We Drive</h2>
      <div className="relative flex-col md:flex-row flex justify-center items-center gap-12 mt-5">
        <div className="flex flex-col items-center">
          <GiCaptainHatProfile className="text-amber-400" />
          <p className="text-base text-white text-center">
            Motorista fixo, treinado e capacitado <br /> para melhor atendê-lo
            diariamente.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoCarSportOutline className="text-amber-400" />
          <p className="text-base text-white text-center">
            Carros novos e confortáveis <br /> com até 20.000km rodados.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BsHeadset className="text-amber-400" />
          <p className="text-base text-white text-center">
            Suporte totalmente humano <br />e agendamento flexível.
          </p>
        </div>
      </div>
      <div className="mx-auto px-17 p-5 flex flex-col items-center">
        <h3 className="leading-tight max-w-3xl text-white text-center text-2xl tracking-tight mt-6">
          Serviço de motorista particular por agendamento e pague apenas pela a
          hora que usar.
        </h3>
        <div className="rounded-md flex hover:bg-gray-400 hover:text-white md:text-base text-sm h-8 w-18 justify-center items-center md:h-12 md:w-32 bg-amber-400 mt-6">
          <a href="https://linktr.ee/wedrivebrasil" target="_blank">
            Agende Aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
