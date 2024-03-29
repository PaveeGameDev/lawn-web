import NavBar from "@/app/NavBar";
import Contact from "@/app/components/Contact";

export default function Kontakt() {
  return (
    <>
      <NavBar currentPage="kontakt" currentHeading="Kontakt" />
      <main className="p-5 flex flex-col justify-center">
        <Contact />
      </main>
    </>
  );
}
