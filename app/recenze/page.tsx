import NavBar from "@/app/NavBar";
import Image from "next/image";

export default function Recenze() {
  return (
    <>
      <NavBar
        currentPage="recenze"
        currentHeading="Recenze"
        currentSubtext="toto je specialni a velice dlouhy text o recenzich a muzete tam videt spoustu veci"
      />
      <main className="p-5">
        <Image src="/lawnMover.jpg" alt="Logo" width={500} height={400} />
        <Image src="/lawnMover.jpg" alt="Logo" width={500} height={400} />
        <Image src="/lawnMover.jpg" alt="Logo" width={500} height={400} />
        <Image src="/lawnMover.jpg" alt="Logo" width={500} height={400} />
      </main>
    </>
  );
}
