import Image from "next/image";
import React from "react";
import bg_1 from "/public/images/bg_1.jpg";
import inter from "/public/images/inter.jpg";

const Wehead: React.FC = () => {
  return (
    <div className="">
      <div className="hidden md:block w-screen h-screen object-cover flex-grow-0">
        <Image src={bg_1} alt="first background" priority fill />
        <div className="absolute left-12 md:left-48">
          <div className="rounded-lg bg-transparent backdrop-blur-lg h-72 w-52 md:w-[26rem] md:h-[30rem] border-4 absolute top-72 left-1 border-black" />
          <div className="border rounded-lg absolute h-72 w-52 md:w-[26rem] md:h-[30rem] bg-white top-64 left-10 shadow-xl">
            <Image src={inter} alt="roads maps" className="rounded-lg" fill />
            <div className="absolute top-20 left-5 p-2">
              <h1 className="font-bold text-lg md:text-3xl">
                Revolucione o jeito <br /> de andar pelo seu <br /> condomínio
              </h1>
              <p className="mt-3 text-sm md:text-lg">
                Com a <span className="font-bold">We Drive</span>, você pode se
                locomover <br /> dentro de condomínios residenciais sem se{" "}
                <br />
                preocupar com estacionamento ou <br /> distâncias longas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen md:hidden bg-[url(/images/bg_1.jpg)] sm:bg-cover bg-no-repeat  h-screen top-0 left-0 right-0 z-10 object-cover flex-grow-0">
        <div className="absolute left-12 md:left-48">
          <div className="rounded-lg bg-transparent backdrop-blur-lg h-72 w-52 md:w-[26rem] md:h-[30rem] border-4 absolute top-72 left-1 border-black" />
          <div className="border rounded-lg absolute h-72 w-52 md:w-[26rem] md:h-[30rem] bg-white top-64 left-10 shadow-xl">
            <Image src={inter} alt="roads maps" className="rounded-lg" fill />
            <div className="absolute p-5">
              <h1 className="font-bold text-lg md:text-3xl">
                Revolucione o jeito <br /> de andar pelo seu <br /> condomínio
              </h1>
              <p className="mt-3 text-sm md:text-lg">
                Com a <span className="font-bold">We Drive</span>, você pode se
                locomover <br /> dentro de condomínios residenciais sem se{" "}
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
