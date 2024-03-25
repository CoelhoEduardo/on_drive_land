import Wehead from "./components/wehead";
import Passengers from "./components/passengers";
import { NavBar } from "./components/navbar";
import Drive from "./components/drive";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <main className="p-0 relative">
      {/* <NavBar /> */}
      <Wehead />
      <AboutUs id="about_us" />
      <Passengers />
      {/* <section id="passengers"> */}
      {/*   <div className="relative w-lvw h-lvh flex justify-center"> */}
      {/*     <Passengers /> */}
      {/*   </div> */}
      {/* </section> */}
      {/* <section id="drives"> */}
      {/*   <div className="relative w-lvw h-lvh flex justify-center"> */}
      {/*     <Drive /> */}
      {/*   </div> */}
      {/* </section> */}
      {/* <section id="about_us"> */}
      {/*   <div className="relative w-lvw h-lvh flex justify-center"> */}
      {/*     <AboutUs /> */}
      {/*   </div> */}
      {/* </section> */}
    </main>
  );
}
