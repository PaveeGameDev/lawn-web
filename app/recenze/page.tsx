import NavBar from "@/app/NavBar";
import SliderRecommendation from "@/app/components/SliderRecommendation";
import Contact from "@/app/components/Contact";

export default function Recenze() {
  return (
    <>
      <NavBar
        currentPage="recenze"
        currentHeading="Recenze"
        currentSubtext="toto je specialni a velice dlouhy text o recenzich a muzete tam videt spoustu veci"
      />
      <main className="p-5 flex flex-col items-center">
        <SliderRecommendation />
        <p className="text-center mb-8">Zdiměřice</p>
        <SliderRecommendation />
        <p className="text-center mb-8">Jesenice</p>
        <Contact />
      </main>
    </>
  );
}
