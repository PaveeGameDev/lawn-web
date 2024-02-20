import Link from "next/link";

export default function NavBarButtonsLittle() {
  return (
    <div className="flex flex-row justify-center space-x-3">
      <Link href="/recenze">Recenze</Link>
      <Link href="/recenze">Recenze</Link>
      <Link href="/recenze">Recenze</Link>
    </div>
  );
}
