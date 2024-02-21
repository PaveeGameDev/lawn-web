import NavBarAction from "@/app/components/NavBarAction";
import NavBarButtonsLittle from "@/app/components/NavBarButtonsLittle";

type Props = {
  currentPage: string;
};

export default function NavBarButtons({ currentPage }: Props) {
  return (
    <div className="flex flex-row space-x-5 items-center">
      <div className="flex flex-row space-x-5 items-center hidden md:block">
        <NavBarButtonsLittle currentPage={currentPage} />
      </div>
      <NavBarAction />
    </div>
  );
}
