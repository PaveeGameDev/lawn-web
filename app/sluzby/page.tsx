import NavBar from "@/app/NavBar";

export default function Sluzby() {
  return (
    <>
      <NavBar
        currentPage="sluzby"
        currentHeading="Služby"
        currentSubtext="toto je specialni a velice dlouhy text"
      />
      <main className="p-5">Ahoj</main>
    </>
  );
}
