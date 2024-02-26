import Link from "next/link";

type Props = {
  currentPage: string;
};

export default function NavBarButtonsLittle({ currentPage }: Props) {
  return (
    <div className="flex flex-row justify-center space-x-4">
      {currentPage === "sluzby" ? (
        <Link href="/sluzby" className="text-primary text-xl">
          Služby
        </Link>
      ) : (
        <Link href="/sluzby" className="text-navbarSubtext text-xl">
          Služby
        </Link>
      )}
      {currentPage === "pujcovna" ? (
        <Link href="/pujcovna" className="text-primary text-xl">
          Půjčovna
        </Link>
      ) : (
        <Link href="/pujcovna" className="text-navbarSubtext text-xl">
          Půjčovna
        </Link>
      )}
      {currentPage === "recenze" ? (
        <Link href="/recenze" className="text-primary text-xl">
          Recenze
        </Link>
      ) : (
        <Link href="/recenze" className="text-navbarSubtext text-xl">
          Recenze
        </Link>
      )}
    </div>
  );
}
