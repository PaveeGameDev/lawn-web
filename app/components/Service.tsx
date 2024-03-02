import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  microText: string;
  image: string;
  imageAlt: string;
  variant?: "border-primary border-4";
  isHomePage?: boolean;
};
export default function Service({
  name,
  imageAlt,
  microText,
  image,
  variant,
  isHomePage,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center pb-8 p-4  ${variant} rounded-3xl`}
    >
      {isHomePage ? (
        <h3 className="text-center text-2xl mb-2">{name}</h3>
      ) : (
        <h2 className="text-center text-2xl mb-2">{name}</h2>
      )}

      <p className="text-center text-lg text-accent mb-2">{microText}</p>
      <Image
        src={image}
        alt={imageAlt}
        width={300}
        height={200}
        className="rounded-lg mb-2"
      />
      <Link
        href={`/sluzby/${name.toLowerCase()}`}
        className="btn btn-primary btn-outline"
      >
        Chci vědět víc
      </Link>
    </div>
  );
}
