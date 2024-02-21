import Link from "next/link";

type Props = {
  currentPage: string;
};

export default function NavBarButtonsLittle({ currentPage }: Props) {
  return (
    <div className="flex flex-row justify-center space-x-4">
      {currentPage === "sluzby" ? (
        <Link href="/sluzby" className="text-primary">
          Služby
        </Link>
      ) : (
        <Link href="/sluzby" className="text-white">
          Služby
        </Link>
      )}
      {currentPage === "pujcovna" ? (
        <Link href="/pujcovna" className="text-primary">
          Půjčovna
        </Link>
      ) : (
        <Link href="/pujcovna" className="text-white">
          Půjčovna
        </Link>
      )}
      {currentPage === "recenze" ? (
        <Link href="/recenze" className="text-primary">
          Recenze
        </Link>
      ) : (
        <Link href="/recenze" className="text-white">
          Recenze
        </Link>
      )}
    </div>
  );
}
