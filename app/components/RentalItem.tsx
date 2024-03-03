import Image from "next/image";
import ContactQuickButton from "@/app/components/ContactQuickButton";

type Props = {
  headline: string;
  info: string[];
  images: { src: string; alt: string }[];
  variant?: "border-primary border-4";
};
export default function RentalItem({ headline, info, images, variant }: Props) {
  return (
    <div className={`mb-16 pb-8 p-4 ${variant} rounded-3xl`}>
      <h2 className="text-2xl mb-2 text-center">{headline}</h2>
      <ul className="list-disc ml-12 mb-8">
        {info.map((info, key) => (
          <li key={key} className="mb-1 text-accent">
            {info}
          </li>
        ))}
      </ul>
      <ContactQuickButton />
      {images.map((image, key) => (
        <Image
          className="mt-5 rounded-xl"
          src={image.src}
          alt={image.alt}
          width={400}
          height={200}
          key={key}
        />
      ))}
    </div>
  );
}
