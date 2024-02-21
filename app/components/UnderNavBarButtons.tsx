import NavBarButtonsLittle from "@/app/components/NavBarButtonsLittle";

type Props = {
  currentPage: string;
};

export default function UnderNavBarButtons({ currentPage }: Props) {
  return (
    <div className="flex flex-row items-center justify-center block md:hidden">
      <NavBarButtonsLittle currentPage={currentPage} />
    </div>
  );
}
