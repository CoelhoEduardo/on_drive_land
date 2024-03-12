import Wehead from "./components/wehead";
import Passengers from "./components/passengers";
import { NavBar } from "./components/navbar";
import Drive from "./components/drive";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <main className="p-0 relative">
      <NavBar />
      <section id="home">
        <Wehead />
      </section>
      <section id="passengers">
        <div className="relative w-lvw h-lvh flex justify-center">
          <Passengers />
        </div>
      </section>
      <section id="drives">
        <div className="relative w-lvw h-lvh flex justify-center">
          <Drive />
        </div>
      </section>
      <section id="about_us">
        <div className="relative w-lvw h-lvh flex justify-center">
          <AboutUs />
        </div>
      </section>
      <footer className="flex flex-row flex-wrap items-center mt-12 justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 bg-black md:justify-between">
        <div className="text-white text-sm">
          <div>We Drive - Mobilidade inteligente</div>
          <p>Contato: admin@wedrivebrasil.com.br</p>
        </div>
        <div className="text-white text-sm text-end flex">
          <p>
            We Drive Brasil Ltda | On Drive - Locação de Veiculos Ltda <br />
            CNPJ: 54.088.912/0001-96
          </p>
        </div>
      </footer>
    </main>
  );
}
