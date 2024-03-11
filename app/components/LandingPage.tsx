import Link from "next/link";
import Logo from "@/app/components/Logo";
import NavBarButtons from "@/app/components/NavBarButtons";
import UnderNavBarButtons from "@/app/components/UnderNavBarButtons";

export default function LandingPage() {
  return (
    <div className="bg-landing-img w-full h-90v flex flex-col items-center bg-center bg-no-repeat bg-cover">
      <div className="p-5 bg-cover w-full bg-gradient-to-b from-accent from-10%">
        <nav className="mb-2">
          <div className="flex flex-row w-full justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>
            <NavBarButtons currentPage="domov" />
          </div>
          <div className="p-5">
            <UnderNavBarButtons currentPage="domov" />
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center h-full justify-center">
        <p className="text-white font-bold text-7xl text-center">
          Kompletni pece o Vas travnik
        </p>
        <h1 className="text-accent text-2xl mt-6">Honzovo travniky</h1>
      </div>
    </div>
  );
}
