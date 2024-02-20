import NavBarAction from "@/app/components/NavBarAction";
import NavBarButtonsLittle from "@/app/components/NavBarButtonsLittle";

export default function NavBarButtons() {
  return (
    <div className="flex flex-row space-x-5 items-center">
      <div className="flex flex-row space-x-5 items-center hidden md:block">
        <NavBarButtonsLittle />
      </div>
      <NavBarAction />
    </div>
  );
}
