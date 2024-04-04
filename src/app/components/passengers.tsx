import Image from "next/image";
import photo2 from "/public/images/photo_2.jpg";
import photo3 from "/public/images/photo3.jpg";
import React from "react";

type Props = {
  nav_id: string;
};

const Passegers: React.FC<Props> = (props) => {
  return (
    <section
      id={props.nav_id}
      className={`flex flex-col shrink-0 text-3xl md:text-4xl mt-3 p-2`}
    >
      <div className="flex md:flex-row flex-col px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <Image
          src={photo3}
          alt="We drive background 1"
          className="rounded-full w-32 h-32 md:w-52 md:h-52 object-fill"
        />
        <p className="text-xl md:text-2xl">
          Rodamos com veículos de{" "}
          <strong className="text-amber-400">categoria black </strong>
          com até <strong className="text-amber-400">20.000kms </strong>e para
          nossos motoristas realizamos{" "}
          <strong className="text-amber-400">background checker</strong> e
          prestamos todo tipo de apoio necessário para a sua melhor conduta ao
          longo da jornada de trabalho.
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse px-12 md:px-56 gap-12 text-white mt-10 items-center justify-center">
        <p className="text-xl md:text-2xl">
          Agendamento feito totalmente online com a nossa equipe e conforme a
          sua <strong className="text-amber-400">necessidade.</strong> Após
          agendado, o motorista estará de forma{" "}
          <strong className="text-amber-400">exclusiva</strong> a sua disposição
          e te levando para onde você precisar.
        </p>
        <Image
          src={photo2}
          alt="We drive background 1"
          priority
          className="rounded-full object-fill w-32 h-32 md:w-52 md:h-52 "
        />
      </div>
    </section>
  );
};

export default Passegers;
