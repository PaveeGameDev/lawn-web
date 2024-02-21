import NavBar from "@/app/NavBar";

export default function Kontakt() {
  return (
    <>
      <NavBar
        currentPage="kontakt"
        currentHeading="Kontakt"
        currentSubtext="toto je specialni a velice dlouhy text"
      />
      <main className="p-5">Ahoj</main>
    </>
  );
}
