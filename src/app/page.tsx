import {
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-30 w-full bg-zinc-800 text-stone-300 p-5">
        <h1 className="text-4xl text-center md:text-start md:ml-36 font-mono">
          On Drive
        </h1>
        <h3 className="md:block hidden text-2xl text-start ml-72 mt-5">
          Mais mobilidade para o seu condomínio horizontal
        </h3>
        <div className="flex md:justify-end gap-3 mt-3">
          <Link href="#fale-conosco">Fale Conosco</Link>
          <Link href="#about-us">Sobre Nós</Link>
        </div>
      </div>
      <section className="p-5">
        <div className="md:flex md:justify-center gap-20">
          <div className="md:mt-36  text-center">
            <h1 className="md:text-2xl text-xl font-bold ">
              Mais conforto e agilidade <br /> dentro do seu condomínio
            </h1>
            <h3 className="md:hidden text-lg">
              Oferecemos a solução com aplicativo, frota e motoristas
            </h3>
            <div className="flex md:block hidden justify-center md:justify-start">
              <div className="h-12 w-32 bg-blue-500 rounded-lg text-xl font-bold text-white mt-3">
                <Link href="https://wa.me/5511987176109?text=Ola,%20tenho%20interesse%20em%20contratar">
                  <button className="w-full h-full">Saber Mais</button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src="site_animation.jpg"
              alt="drive with on drive"
              className="md:h-96 mt-6"
            />
          </div>
        </div>
        <div className="md:flex md:justify-center gap-20 mt-4">
          <div className="md:mt-36  text-center md:hidden">
            <h1 className=" md:text-2xl text-xl">
              Carros confortáveis e<br /> preços de corrida menores <br />
              que qualquer serviço de aplicativo
            </h1>
            <div className="flex justify-center  md:justify-end">
              <div className="h-12 w-32 bg-blue-500 rounded-lg text-xl font-bold text-white mt-3">
                <Link href="https://wa.me/5511987176109?text=Ola,%20tenho%20interesse%20em%20contratar">
                  <button className="w-full h-full">Saber Mais</button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src="sedan-car.jpg" alt="sedan car image" className="h-96" />
          </div>
          <div className="md:mt-36  text-center md:block hidden">
            <h1 className=" md:text-2xl text-xl">
              Carros confortáveis e<br /> preços de corrida menores <br />
              que qualquer serviço de aplicativo
            </h1>
            <div className="flex justify-center  md:justify-end">
              <div className="h-12 w-32 bg-blue-500 rounded-lg text-xl font-bold text-white mt-3">
                <Link href="https://wa.me/5511987176109?text=Ola,%20tenho%20interesse%20em%20contratar">
                  <button className="w-full h-full">Saber Mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="md:flex gap-3 justify-center text-white text-center p-5">
          <div className="md:h-96 h-80 bg-blue-500 w-80 rounded-md">
            <RocketLaunchIcon className="h-12 w-12 ml-32 mt-5" />
            <h3 className="text-3xl font-bold mt-5">Cuidamos de tudo</h3>
            <p className="text-2xl font-bold mt-12">
              Fazemos a seleção dos melhores motoristas e dos melhores carros
            </p>
          </div>
          <div className="md:h-96 h-80 bg-zinc-800 w-80 rounded-md">
            <CurrencyDollarIcon className="h-12 w-12 ml-32 mt-5" />
            <h3 className="text-3xl font-bold mt-5">Orçamento Flexível</h3>
            <p className="text-2xl font-bold mt-12">
              Negociamos o valor que faça sentido para o seu condomínio
            </p>
          </div>
          <div className="md:h-96 h-80 bg-blue-500 w-80 rounded-md">
            <DevicePhoneMobileIcon className="h-12 w-12 ml-32 mt-5" />
            <h3 className="text-3xl font-bold mt-5">Aplicativo intuitivo</h3>
            <p className="text-2xl font-bold mt-12">
              Aplicação mobile iOS e Android para os moradores desfrutarem da
              melhor maneira
            </p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img
            src="banner-photo.jpg"
            className="md:w-[52rem] md:h-72 h-52 w-96 rounded-lg"
          />
          <div className="bg-gradient-to-r from-zinc-800 from-5% h-52 w-96 md:w-[52rem] md:h-72 absolute rounded-lg" />
          <div className="absolute text-white bottom-0 md:bottom-12">
            <h2 className="text-2xl  text-center font-bold">
              Teste antes de fechar
            </h2>
            <p className="text-lg text-center">
              Disponibilizamos nosso serviço por 15 dias
              <br />
              antes de fechar o contrato.
            </p>
            <div className="flex justify-center">
              <div className="h-12 w-40 bg-blue-500 mb-3 rounded-lg text-xl font-bold text-white mt-3">
                <Link href="https://wa.me/5511987176109?text=Ola,%20tenho%20interesse%20em%20contratar">
                  <button className="w-full h-full">Fale conosco</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="p-5">
        <div className="border border-gray-300" />
        <div className="md:mt-32 mt-5 md:hidden block">
          <h3 className="text-xl mb-3 text-center">Sobre Nós</h3>
          <p className="text-normal indent-8">
            Nascemos com o proposito de facilitar o dia-a-dia para quem mora em{" "}
            condomínios horizontais, trazendo uma nova forma de se locomover,{" "}
            sem qualquer dificuldade e pouco custo.
          </p>
        </div>
        <div className="md:flex md:justify-center gap-20 mt-4">
          <div>
            <img
              src="car-red.jpg"
              alt="guy with a phone and red car"
              className="md:h-96"
            />
          </div>
          <div className="mt-32 hidden md:block">
            <h3 className="text-2xl mb-3">Sobre Nós</h3>
            <p className="text-xl">
              Nascemos com o proposito de facilitar o dia-a-dia para quem mora
              em <br />
              condomínios horizontais, trazendo uma nova forma de se locomover,{" "}
              <br />
              sem qualquer dificuldade e pouco custo.
            </p>
          </div>
        </div>
      </section>
      <section id="fale-conosco" className="p-5 bg-gray-100">
        <form
          action="https://formsubmit.co/eduhcoelho48@gmail.com"
          method="POST"
          className="grid justify-center"
        >
          <div className="mb-10 text-xl text-bold text-center">
            Fale Conosco
          </div>
          <input
            className="mb-3 center block w-96 h-9 border-0 rounded-lg ring-1 ring-inset ring-gray-300 "
            type="text"
            name="name"
            placeholder=" Digite seu nome"
            required
          />
          <input
            className="mb-3 block w-96 h-9 border-0 rounded-lg ring-1 ring-inset ring-gray-300"
            type="text"
            name="email"
            placeholder=" Digite seu email"
            required
          />
          <textarea
            className="border-0 rounded-md ring-1 ring-inset ring-gray-300 "
            name="message"
            cols={30}
            rows={10}
            placeholder=" Escreva aqui sua mensagem"
            required
          />
          <div className="flex justify-center">
            <div className="h-12 w-28 bg-blue-500 rounded-lg text-white mt-3">
              <button className="w-full h-full">Enviar</button>
            </div>
          </div>
          <input type="hidden" name="_subject" value="Novo Contato!" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </section>
      <footer className="h-32 bg-zinc-800 text-white p-5">
        <div className="">aqui vai alguns dados</div>
        <div>CNPJ</div>
        <div>NUMERO DE CONTATO</div>
        <div>OUTRAS BABOSEIRAS</div>
      </footer>
    </main>
  );
}
