import NavBar from "@/app/NavBar";
import Service from "@/app/components/Service";
import Contact from "@/app/components/Contact";

export default function Sluzby() {
  return (
    <>
      <NavBar
        currentPage="sluzby"
        currentHeading="Služby"
        currentSubtext="toto je specialni a velice dlouhy text"
      />
      <main className="p-5">
        <Service
          name="Vertikutace"
          microText="Odstranění plstí a provzdušnění"
          image="/lawnMover.jpg"
          imageAlt="Obrázek vertikutace"
        />
        <div className="mb-16">
          <Service
            name="Aerifikace"
            microText="Proces provzdušnění půdy využívající propichování."
            image="/lawnMover.jpg"
            imageAlt="Obrázek vertikutace"
            variant="border-primary border-4"
          />
        </div>
        <div>
          <h2 className="text-center text-3xl mt-32">Kontakt</h2>
          <Contact />
        </div>
      </main>
    </>
  );
}
