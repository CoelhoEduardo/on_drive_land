import Image from "next/image";
import photo3 from "/public/images/photo_2.jpg";
import photo1 from "/public/images/photo3.jpg";
import photo2 from "/public/images/photo2_2.jpg";
import photo4 from "/public/images/photo4.jpg";
import photo5 from "/public/images/photo5.jpg";
import photo6 from "/public/images/photo6.jpg";
import React from "react";

type Props = {
  nav_id: string;
};

const Passegers: React.FC<Props> = (props) => {
  return (
    <section
      id={props.nav_id}
      className={`flex flex-col shrink-0 text-3xl md:text-4xl mt-10 p-2`}
    >
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo1}
          alt="carro novo"
          className="rounded-full w-32 h-32 md:w-64 md:h-64"
        />
        <p className="text-xl md:text-2xl">
          Para sua maior <span className="text-yellow-500">segurança</span>,
          rodamos somente com{" "}
          <span className="text-yellow-500">carros novos </span> (até
          20.000kms), em categorias variadas de acordo com a necessidade dos
          nossos clientes.
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl">
          Todos os nossos veículos são monitorados através de um{" "}
          <span className="text-yellow-500">
            sistema de rastreamento particular,{" "}
          </span>
          com link acessível por você em tempo real.
        </p>
        <Image
          src={photo2}
          alt="foto de rastreamento veicular"
          priority
          className="rounded-full w-32 h-32 md:w-64 md:h-64 "
        />
      </div>
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo3}
          alt="homem agendando serviço pelo telefone"
          className="rounded-full w-32 h-32 md:w-64 md:h-64"
        />
        <p className="text-xl md:text-2xl">
          <span className="text-yellow-500">
            Duas modalidades de agendamento:{" "}
          </span>
          recorrente e avulso. Ambos feitos de forma{" "}
          <span className="text-yellow-500">totalmente online </span>
          por whatsapp junto a nossa equipe e conforme a sua necessidade.
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl">
          Sem franquia mínima de horas. A{" "}
          <span className="text-yellow-500">We Drive </span>
          te atende exatamente da forma como você precisa, seja 1 hora semanal
          ou todos os dias.
        </p>
        <Image
          src={photo4}
          alt="mulher feliz com o serviço"
          priority
          className="rounded-full w-32 h-32 md:w-64 md:h-64 "
        />
      </div>
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo5}
          alt="Motorista treinado e capacitado da we drive"
          className="rounded-full w-32 h-32 md:w-64 md:h-64"
        />
        <p className="text-xl md:text-2xl">
          Todos os nossos motoristas são{" "}
          <span className="text-yellow-500">
            registrados, treinados e verificados{" "}
          </span>
          por uma das melhores empresas de screening pessoal do mercado
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl">
          Disponibilizamos cadeirinha de criança para todas as idades,{" "}
          <span className="text-yellow-500">até o limite de 1,45m.</span>
        </p>
        <Image
          src={photo6}
          alt="cadeirinha de criança automotiva para a segurança"
          priority
          className="rounded-full w-32 h-32 md:w-64 md:h-64 "
        />
      </div>
    </section>
  );
};

export default Passegers;
