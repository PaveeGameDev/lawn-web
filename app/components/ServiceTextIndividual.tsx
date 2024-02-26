import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  heading: string;
  children: ReactNode;
};
export default function ServiceTextIndividual({ heading, children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center mb-10 text-center">
      <h2 className="text-2xl mb-2">{heading}</h2>
      {children}
    </div>
  );
}
