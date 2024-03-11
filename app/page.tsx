import NavBar from "@/app/NavBar";
import About from "@/app/components/About";
import GardenerVSLawnman from "@/app/components/GardenerVSLawnman";
import BeforeAfter from "@/app/components/BeforeAfter";
import Contact from "@/app/components/Contact";
import Service from "@/app/components/Service";
import MoreServices from "@/app/components/MoreServices";
import LandingPage from "@/app/components/LandingPage";

export default function Home() {
  return (
    <>
      <main className="">
        <LandingPage />
        <div className="p-5">
          <div className="mb-20">
            <h2 className="text-center text-3xl mb-2">Moje sluzby</h2>
            <Service
              name="Vertikutace"
              microText="Odstranění plstí a provzdušnění"
              image="/lawnMover.jpg"
              imageAlt="Obrázek vertikutace"
              isHomePage={true}
            />
            <Service
              name="Aerifikace"
              microText="Proces provzdušnění půdy využívající propichování."
              image="/lawnMover.jpg"
              imageAlt="Obrázek vertikutace"
              isHomePage={true}
            />
            <Service
              name="Vertikutace"
              microText="Odstranění plstí a provzdušnění"
              image="/lawnMover.jpg"
              imageAlt="Obrázek vertikutace"
              isHomePage={true}
            />
            <Service
              name="Aerifikace"
              microText="Proces provzdušnění půdy využívající propichování."
              image="/lawnMover.jpg"
              imageAlt="Obrázek vertikutace"
              isHomePage={true}
            />
            <MoreServices />
          </div>

          <About />
          <GardenerVSLawnman />
          <BeforeAfter />
          <div>
            <h2 className="text-center text-3xl mb-2">Kontakt</h2>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
