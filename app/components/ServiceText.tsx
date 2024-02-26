import { ReactNode } from "react";
import Link from "next/link";
import ServiceTextIndividual from "@/app/components/ServiceTextIndividual";

type Props = {
  name: string;
  whatItIs: ReactNode;
  included: ReactNode;
  notIncluded: ReactNode;
  price: string;
  whyNeeded: ReactNode;
};
export default function ServiceText({
  name,
  price,
  notIncluded,
  included,
  whyNeeded,
  whatItIs,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <ServiceTextIndividual heading={`Co je ${name}?`}>
        {whatItIs}
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Proč je ${name} potřeba?`}>
        {whyNeeded}
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Co je součástí ${name}?`}>
        {included}
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Co není součástí ${name}?`}>
        {notIncluded}
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Cena ${name}?`}>
        <p className="text-accent">{`Již od ${price} kč`}</p>
      </ServiceTextIndividual>
      <Link
        href={`/kontakt`}
        className="btn btn-primary rounded-full flex justify-center items-center"
      >
        <p>Mám zájem</p>
      </Link>
    </div>
  );
}
