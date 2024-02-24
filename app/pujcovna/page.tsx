import NavBar from "@/app/NavBar";
import RentalItem from "@/app/components/RentalItem";

export default function Pujcovna() {
  return (
    <>
      <NavBar currentPage="pujcovna" currentHeading="Půjčovna" />
      <main className="p-5">
        <RentalItem
          headline="Aerifikator"
          info={["Hmotnost: 152kg", "Cena: 2000 Kč", "Vratná kauce: 12 000 Kč"]}
          images={[{ src: "/lawnMover.jpg", alt: "Aerifikator foto" }]}
        />
        <RentalItem
          headline="Vertikutator"
          info={["Hmotnost: 15kg", "Cena: 1500 Kč", "Vratná kauce: 8 000 Kč"]}
          images={[{ src: "/lawnMover.jpg", alt: "Vertikutator foto" }]}
        />
      </main>
    </>
  );
}
