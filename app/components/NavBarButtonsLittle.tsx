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
        <Link href="/sluzby" className="text-navbarSubtext">
          Služby
        </Link>
      )}
      {currentPage === "pujcovna" ? (
        <Link href="/pujcovna" className="text-primary">
          Půjčovna
        </Link>
      ) : (
        <Link href="/pujcovna" className="text-navbarSubtext">
          Půjčovna
        </Link>
      )}
      {currentPage === "recenze" ? (
        <Link href="/recenze" className="text-primary">
          Recenze
        </Link>
      ) : (
        <Link href="/recenze" className="text-navbarSubtext">
          Recenze
        </Link>
      )}
    </div>
  );
}
