import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  info: string;
  type: "email" | "phone" | "location";
};
export default function ContactInfo({ info, icon, type }: Props) {
  return (
    <div className="flex flex-row justify-between items-center my-3">
      {icon}
      <p className="mx-2"> {info}</p>
      {type === "email" && (
        <a className="btn btn-primary w-24" href={`mailto:${info}`}>
          Napsat
        </a>
      )}
      {type === "phone" && (
        <a className="btn btn-primary w-24" href={`tel:${info}`}>
          Zavolat
        </a>
      )}
    </div>
  );
}
