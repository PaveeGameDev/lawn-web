import Logo from "@/app/components/Logo";
import NavBarButtons from "@/app/components/NavBarButtons";
import UnderNavBarButtons from "@/app/components/UnderNavBarButtons";
import Link from "next/link";

type Props = {
  currentPage: string;
  currentHeading?: string;
  currentSubtext?: string;
};

export default function NavBar({
  currentPage,
  currentSubtext,
  currentHeading,
}: Props) {
  return (
    <div className="bg-nav-bar pb-12 bg-cover">
      <div className="bg-gradient-to-b from-accent w-full p-5">
        <nav className="mb-2">
          <div className="flex flex-row w-full justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>
            <NavBarButtons currentPage={currentPage} />
          </div>
          <div className="p-5">
            <UnderNavBarButtons currentPage={currentPage} />
          </div>
        </nav>
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="font-bold text-5xl text-white">{currentHeading}</h1>
          <p className="mx-8 text-navbarSubtext">{currentSubtext}</p>
        </div>
      </div>
    </div>
  );
}
