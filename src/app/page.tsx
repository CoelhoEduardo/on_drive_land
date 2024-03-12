import Wehead from "./components/wehead";
import Passengers from "./components/passengers";
import { NavBar } from "./components/navbar";
import Drive from "./components/drive";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <main className="p-0">
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
      <footer className="w-full h-28 flex bg-black border border-black mt-6 justify-between gap-4 p-5 ">
        <div className="text-white text-base text-end flex">
          <p>Contato: admin@wedrivebrasil.com.br</p>
        </div>
        <div className="text-white text-base text-end flex">
          <p>
            We Drive Brasil Ltda | On Drive - Locação de Veiculos Ltda <br />
            CNPJ: 54.088.912/0001-96
          </p>
        </div>
      </footer>
    </main>
  );
}
