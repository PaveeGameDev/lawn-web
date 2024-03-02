import { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
  variant?: "bg-gray-300 rounded-xl p-5";
};
export default function ServiceTextIndividual({
  heading,
  children,
  variant,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center mb-10 mx-5 text-center ${variant}`}
    >
      <h2 className="text-2xl mb-2">{heading}</h2>
      {children}
    </div>
  );
}
