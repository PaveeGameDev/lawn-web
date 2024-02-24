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
    <div className="bg-nav-bar p-5 pb-16 bg-cover">
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
        <h1 className="font-bold text-3xl text-white">{currentHeading}</h1>
        <p className="mx-8 text-white">{currentSubtext}</p>
      </div>
    </div>
  );
}
