import { Faq, Services, AboutUs } from "./components/sections";
import Image from "next/image";
import header1 from "/public/images/header_desk.jpg";

export default function Home() {
  return (
    <main className="flex-col flex items-center  justify-center">
      <header className="relative">
        <div className="w-full h-full mt-20 md:mt-0">
          <Image
            src={header1}
            priority
            alt="Mulher ao telefone usando o serviço da we drive feliz"
            className="w-full"
          />
        </div>
        <div className="absolute -bottom-5 w-full md:block md:inset-x-1/3 md:bottom-[12rem] md:w-fit md:translate-y-1/2">
          <div className="text-stone-200 drop-shadow-[0_7px_3px_rgba(0,0,0,0.4)] text-center flex items-center justify-center flex-col w-full">
            <h1 className="text-xl xl:text-4xl  tracking-tight text-center">
              Seu motorista <span className="font-bold">particular</span>{" "}
              <br className="md:hidden" /> por uma{" "}
              <span className="font-bold">fração de custo</span>.
            </h1>
            <div
              className="bg-gray-200 text-black rounded-md flex 
            font-semibold md:hover:bg-white md:hover:text-black md:text-xl 
            text-sm h-10 w-32 md:h-12 md:w-38 md:text-white justify-center items-center 
            md:bg-black md:mt-6 mt-3"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdxcVqNGX3JQ6ZCOx1zxVoGPLrWnYlmWtzucEiOqeDPUqcjng/viewform"
                target="_blank"
              >
                Contrate
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="px-0 lg:container mt-20">
        <div className="space-y-12">
          <div className="flex flex-col h-full items-center">
            <AboutUs nav_id="about_us" />
            <Services nav_id="product" />
            <Faq nav_id="faq" />
          </div>
        </div>
      </div>
    </main>
  );
}
