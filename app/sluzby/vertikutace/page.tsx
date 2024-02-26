import NavBar from "@/app/NavBar";
import Image from "next/image";
import ServiceText from "@/app/components/ServiceText";
import Footer from "@/app/Footer";

export default function Vertikutace() {
  return (
    <>
      <NavBar currentPage="vertikutace" currentHeading="Vertikutace" />
      <main className="p-5 items-center flex flex-col">
        {/*<h1 className="font-bold text-5xl">Vertikutace</h1>*/}

        <ServiceText
          name="vertikutace"
          whatItIs={<p className="text-accent">Velmi dobr8 vec</p>}
          included={<p className="text-accent">Velmi dobr8 vec included</p>}
          notIncluded={<p className="text-accent">Velmi spatna vec</p>}
          price="5 000"
          whyNeeded={<p className="text-accent">Velmi dobra vec potreba</p>}
        />
        <Image
          src="/lawnMover.jpg"
          alt="vertikutace"
          height={200}
          width={300}
        />
      </main>
    </>
  );
}
