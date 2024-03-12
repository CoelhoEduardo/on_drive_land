import Image from "next/image";
import React from "react";
import inter from "/public/images/inter.jpg";

const Wehead: React.FC = () => {
  return (
    <div className="container">
      <div className="bg-[url(/images/bg_1.jpg)] bg-no-repeat shrink-0 w-screen bg-cover h-screen object-fill flex-grow-0">
        <div className="absolute md:left-48 left-12">
          <div className="rounded-lg bg-transparent backdrop-blur-lg h-96 w-80 md:w-[33rem] md:h-[32rem] border-4 absolute top-72 left-1 border-black" />
          <div className="border rounded-lg absolute h-96 w-80 md:w-[33rem] md:h-[32rem] bg-white top-64 left-10 shadow-xl">
            <Image src={inter} alt="roads maps" className="rounded-lg" fill />
            <div className="absolute md:top-20 md:left-16 p-5 top-16">
              <h1 className="font-bold md:text-4xl text-2xl">
                Revolucione o jeito <br /> de andar pelo seu <br /> condomínio
              </h1>
              <p className="md:mt-12 mt-3 md:text-xl text-sm">
                Com a <span className="font-bold">We Drive</span>, você pode se
                locomover <br /> dentro de condomínios residenciais sem se
                <br />
                preocupar com estacionamento ou <br /> distâncias longas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wehead;
