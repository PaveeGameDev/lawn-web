import NavBar from "@/app/NavBar";
import Image from "next/image";
import ServiceText from "@/app/components/ServiceText";
export default function Vertikutace() {
  return (
    <>
      <NavBar currentPage="vertikutace" currentHeading="Vertikutace" />
      <main className="p-5 items-center flex flex-col">
        <ServiceText
          name="vertikutace"
          whatItIs="
              si nepleťme s provzdušňovači. Ty totiž nezasahují do země, ale
              pomocí ocelových pružinek osazených na válci pročešou trávník a
              odstraní vrchní vrstvu staré plsti a mechu. S ohledem na nižší
              frekvenci používání vertikutátoru i provzdušňovače jsou výhodou
              univerzální kombinované stroje, které disponují jak válcem s
              vertikutačními noži, tak provzdušňovacím válcem s ocelovými
              pružinkami. "
          included="
              Elektrický stroj mívá oproti benzínovému nižší výkon, je tedy
              pomalejší. Výhodou je ale tichý chod. Motor nespaluje žádné
              palivo, provoz je tím pádem o něco šetrnější k životnímu
              prostředí. Stroj uskladníte téměř kdekoliv, nevyžaduje prakticky
              žádnou údržbu ani servis. Předpokladem je však elektrická zásuvka
              v dosahu. Benzínový vertikutátor je sice zpravidla těžší,
              hlučnější a zřejmě méně přívětivý k životnímu prostředí, ale
              nabízí větší záběr a rychlejší práci p
            "
          notIncluded="
              Na válci běžných vertikutátorů bývá 18-20 nožů. Pořídíte-li si
              stroj s více noži na válci, stačí vám přejet trávník pouze v
              jednom směru. Naopak s vertikutátorem s menším počtem nožů, je
              potřeba jet pro jistotu podélně a pak ještě příčně. Obvyklý záběr
              menších strojů je 32 c
            "
          price="5 000"
          whyNeeded="
              dzim. A protože při prořezání dochází k odhalení kořínků trávy, je
              dobré jarní vertikutaci provádět v době, kdy již nehrozí mrazíky.
              Ideálně tedy ve chvíli, kdy teplota půdy dosáhne alespoň 10 °C.
              Před vertikutací nezapomeňte trávník posekat, po ní je pak vhodné
              dosít holá
            "
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
