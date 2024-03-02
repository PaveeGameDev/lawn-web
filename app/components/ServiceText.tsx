import Link from "next/link";
import ServiceTextIndividual from "@/app/components/ServiceTextIndividual";

type Props = {
  name: string;
  whatItIs: string;
  included: string;
  notIncluded: string;
  price: string;
  whyNeeded: string;
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
        <p className="text-accent text-justify"> {whatItIs} </p>
      </ServiceTextIndividual>
      <ServiceTextIndividual
        heading={`Proč je ${name} potřeba?`}
        variant="bg-gray-300 rounded-xl p-5"
      >
        <p className="text-accent text-justify"> {whyNeeded}</p>
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Co je součástí ${name}?`}>
        <p className="text-accent"> {included}</p>
      </ServiceTextIndividual>
      <ServiceTextIndividual
        heading={`Co není součástí ${name}?`}
        variant="bg-gray-300 rounded-xl p-5"
      >
        <p className="text-accent"> {notIncluded}</p>
      </ServiceTextIndividual>
      <ServiceTextIndividual heading={`Cena ${name}?`}>
        <p className="text-accent">{`Již od ${price} kč`}</p>
      </ServiceTextIndividual>
      <Link
        href={`/kontakt`}
        className="btn btn-lg btn-wide btn-primary rounded-xl flex justify-center items-center"
      >
        <p>Mám zájem</p>
      </Link>
    </div>
  );
}
