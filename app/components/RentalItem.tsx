import Image from "next/image";
import ContactQuickButton from "@/app/components/ContactQuickButton";

type Props = {
  headline: string;
  info: string[];
  images: { src: string; alt: string }[];
};
export default function RentalItem({ headline, info, images }: Props) {
  return (
    <div className="mb-16">
      <h2 className="font-bold text-2xl mb-2">{headline}</h2>
      <ul className="list-disc ml-12 mb-8">
        {info.map((info, key) => (
          <li key={key} className="mb-1">
            {info}
          </li>
        ))}
      </ul>
      <ContactQuickButton />
      {images.map((image, key) => (
        <Image
          className="mt-5"
          src={image.src}
          alt={image.alt}
          width={400}
          height={400}
          key={key}
        />
      ))}
    </div>
  );
}
