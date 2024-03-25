import Image from "next/image";
import photo from "/public/images/photo1.jpg";
import photo2 from "/public/images/photo2.jpg";
import photo3 from "/public/images/photo3.jpg";
import React from "react";

const Passegers: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-gray-900 shrink-0 text-3xl md:text-4xl`}
    >
      <div className="flex px-12 md:px-56 justify-center gap-12 text-white items-center">
        <Image
          src={photo}
          alt="We drive background 1"
          className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
        />
        <p className="text-sm md:text-2xl">
          Uma startup que nasceu apenas com um foco e um propósito: melhorar a
          <strong className="text-amber-400"> qualidade de vida </strong> das
          pessoas através da{" "}
          <strong className="text-amber-400">mobilidade inteligente.</strong>
        </p>
      </div>
      <div className="flex px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-sm md:text-2xl">
          Aplicativo <strong className="text-amber-400">exclusivo</strong> para
          o condomínio, 100% funcional e que atende exatamente as necessidades
          dos usuários, sem a necessidade do condomínio{" "}
          <strong className="text-amber-400">
            investir recursos financeiros{" "}
          </strong>
          e/ou tempo em tecnologia.
        </p>
        <Image
          src={photo2}
          alt="We drive background 1"
          className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
        />
      </div>
      <div className="flex px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo3}
          alt="We drive background 1"
          className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
        />
        <p className="text-sm md:text-2xl text-center">
          Rodamos com{" "}
          <strong className="text-amber-400">
            {" "}
            veículos de até 20.000kms{" "}
          </strong>
          e para nossos motoristas realizamos{" "}
          <strong className="text-amber-400">background checker</strong> e
          prestamos todo tipo de apoio necessário para a sua melhor conduta ao
          longo da jornada de trabalho.
        </p>
      </div>
    </section>
  );
};

export default Passegers;
