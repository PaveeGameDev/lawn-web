import NavBar from "@/app/NavBar";
import Service from "@/app/components/Service";

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
        <Service
          name="Aerifikace"
          microText="Proces provzdušnění půdy využívající propichování."
          image="/lawnMover.jpg"
          imageAlt="Obrázek vertikutace"
          variant="border-primary border-4"
        />
      </main>
    </>
  );
}
