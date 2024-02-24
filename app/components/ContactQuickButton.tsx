import Link from "next/link";

export default function ContactQuickButton() {
  return (
    <div className="w-full flex justify-center">
      <Link href="/kontakt" className="btn btn-outline btn-primary w-1/2 h-16">
        Mám zájem
      </Link>
    </div>
  );
}
