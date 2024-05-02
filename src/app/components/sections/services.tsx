import Image from "next/image";
import photo3 from "/public/images/new_book.jpg";
import photo1 from "/public/images/new_car.jpg";
import photo2 from "/public/images/track_phone.jpg";
import photo4 from "/public/images/happy-couple-posing-studio.jpg";
import photo5 from "/public/images/driver.jpg";
import photo6 from "/public/images/photo6.jpg";

export const Services = ({ nav_id }: { nav_id: string }) => {
  return (
    <section
      id={nav_id}
      className={`flex flex-col shrink-0 text-3xl md:text-4xl mt-10 p-2`}
    >
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo1}
          alt="carro novo para sempre atender nossos clientes"
          className="rounded-full w-32 h-32 md:w-44 md:h-44"
          priority
        />
        <p className="text-xl md:text-2xl">
          Para sua maior <span className="text-yellow-500">segurança</span>,
          rodamos somente com{" "}
          <span className="text-yellow-500">carros novos </span>, em categorias variadas de acordo com a necessidade dos
          nossos clientes.
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl text-end">
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
          className="rounded-full w-32 h-32 md:w-44 md:h-44 image-rendering[crisp-edges] filter[contrast-150] object-cover"
        />
      </div>
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo3}
          alt="homem agendando serviço pelo telefone"
          className="rounded-full w-32 h-32 md:w-44 md:h-44 image-rendering[crisp-edges] filter[contrast-150] "
          priority
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
        <p className="text-xl md:text-2xl text-end">
          Sem franquia mínima de horas. A{" "}
          <span className="text-yellow-500">We Drive </span>
          te atende exatamente da forma como <span className="text-yellow-500">você precisa</span>, seja 1 hora semanal
          ou todos os dias.
        </p>
        <Image
          src={photo4}
          alt="homem feliz economizando horas com a we drive"
          priority
          className="rounded-full w-32 h-32 md:w-44 md:h-44 image-rendering[crisp-edges] filter[contrast-150]"
        />
      </div>
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo5}
          alt="Motorista treinado e capacitado da we drive"
          className="rounded-full w-32 h-32 md:w-44 md:h-44 image-rendering[crisp-edges] filter[contrast-150] object-cover"
          priority
        />
        <p className="text-xl md:text-2xl">
          Todos os nossos motoristas são{" "}
          <span className="text-yellow-500">
            registrados, treinados e verificados{" "}
          </span>
          por uma das melhores empresas de screening pessoal do mercado.
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl text-end">
          Disponibilizamos cadeirinha de criança para todas as idades,{" "}
          <span className="text-yellow-500">até o limite de 1,45m.</span>
        </p>
        <Image
          src={photo6}
          alt="cadeirinha de criança automotiva para a segurança"
          priority
          className="rounded-full w-32 h-32 md:w-44 md:h-44"
        />
      </div>
    </section>
  );
};
