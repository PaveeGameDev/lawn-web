import NavBar from "@/app/NavBar";
import Image from "next/image";
import SliderRecommendation from "@/app/components/SliderRecommendation";
import Link from "next/link";

export default function Recenze() {
  return (
    <>
      <NavBar
        currentPage="recenze"
        currentHeading="Recenze"
        currentSubtext="toto je specialni a velice dlouhy text o recenzich a muzete tam videt spoustu veci"
      />
      <main className="p-5">
        <SliderRecommendation />
        <p className="text-center pb-8">Zdiměřice</p>
        <SliderRecommendation />
        <p className="text-center pb-8">Jesenice</p>
        <p className="text-center pb-2">
          Stejně krásně bude vypadat i Vaše zahrada
        </p>
      </main>
    </>
  );
}
