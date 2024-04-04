import Passengers from "./components/passengers";
import Drive from "./components/drive";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <main>
      <div className="px-0 lg:container mt-20">
        <div className="space-y-12">
          <div className="flex flex-col h-full items-center">
            <AboutUs id="about_us" />
            <Passengers nav_id="product" />
            <Drive nav_id="faq" />
          </div>
        </div>
      </div>
    </main>
  );
}
