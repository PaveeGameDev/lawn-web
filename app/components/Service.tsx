import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  microText: string;
  image: string;
  imageAlt: string;
};
export default function Service({ name, imageAlt, microText, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2 className="text-center text-2xl mb-2">{name}</h2>
      <p className="text-center text-lg text-accent mb-2">{microText}</p>
      <Image
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        className="rounded-lg mb-2"
      />
      <Link
        href={`/${name.toLowerCase()}`}
        className="btn btn-primary btn-outline"
      >
        Chci vědět víc
      </Link>
    </div>
  );
}
