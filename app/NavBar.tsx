import Logo from "@/app/components/Logo";
import NavBarButtons from "@/app/components/NavBarButtons";

export default function NavBar() {
  return (
    <nav className="flex flex-row w-full justify-between items-center">
      <Logo />
      <NavBarButtons />
    </nav>
  );
}
