import NavBar from "@/app/NavBar";
import RentalItem from "@/app/components/RentalItem";
import Contact from "@/app/components/Contact";

export default function Pujcovna() {
  return (
    <>
      <NavBar currentPage="pujcovna" currentHeading="Půjčovna" />
      <main className="p-5 flex justify-center items-center flex-col">
        <RentalItem
          headline="Aerifikator"
          info={["Hmotnost: 152kg", "Cena: 2000 Kč", "Vratná kauce: 12 000 Kč"]}
          images={[{ src: "/lawnMover.jpg", alt: "Aerifikator foto" }]}
        />
        <RentalItem
          headline="Vertikutator"
          info={["Hmotnost: 15kg", "Cena: 1500 Kč", "Vratná kauce: 8 000 Kč"]}
          images={[{ src: "/lawnMover.jpg", alt: "Vertikutator foto" }]}
          variant="border-primary border-4"
        />
        <div>
          <h2 className="text-center text-3xl mt-16">Kontakt</h2>
          <Contact />
        </div>
      </main>
    </>
  );
}
