import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { GiCaptainHatProfile, GiSmartphone } from "react-icons/gi";

type Props = { id: string };

const AboutUs: React.FC<Props> = (props) => {
  return (
    <section
      id={props.id}
      className={`flex flex-col bg-gray-900 py-20 text-3xl md:text-4xl`}
    >
      <div className="mx-auto px-17 font-sans justify-center md:mt-16">
        <h2 className="text-amber-400 text-center">
          Aplicativo de transporte feito para você
        </h2>
        <p className="leading-tight text-center max-w-3xl text-white text-3xl tracking-tight mt-6">
          <strong>
            Iremos melhorar a sua qualidade de vida através da mobilidade
            inteligente.{" "}
          </strong>
          Oferecemos o serviço com tecnologia de ponta, porém sem lançar mão do
          aspecto humano, trazendo a melhor alternativa de transporte para o seu
          dia-a-dia ou para o seu negócio.
        </p>
      </div>
      <div className="relative flex-col md:flex-row flex justify-center items-center gap-12 mt-12">
        <div className="flex flex-col items-center">
          <IoCarSportOutline className="text-amber-400" />
          <p className="text-base text-white text-center">
            Carros novos e confortáveis <br /> com até 20.000km rodados.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <GiSmartphone className="text-amber-400" />
          <p className="text-base text-white text-center">
            Aplicativo de fácil uso e <br /> com suporte 24h.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <GiCaptainHatProfile className="text-amber-400" />
          <p className="text-base text-white text-center">
            Motoristas treinados e capacitados <br /> para melhor atendê-lo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
