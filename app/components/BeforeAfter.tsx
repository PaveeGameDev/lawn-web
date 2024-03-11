import Image from "next/image";
import HorizontalLine1 from "@/app/components/HorizontalLine1";

export default function BeforeAfter() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-center text-3xl mb-2">Ukazka mych vysledku</h2>
      <Image src="/lawnMover.jpg" alt="Moje fotka" width="400" height="500" />
      <p className="text-justify text-accent mb-3 mt-2">Pred moji praci</p>
      <HorizontalLine1 />
      <Image
        src="/lawnMover.jpg"
        alt="Moje fotka"
        width="400"
        height="500"
        className="mt-6"
      />
      <p className="text-justify text-accent mb-2 mt-2">Po moji praci</p>
    </div>
  );
}
