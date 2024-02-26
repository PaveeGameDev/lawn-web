import Link from "next/link";

export default function ContactQuickButton() {
  return (
    <div className="w-full flex justify-center">
      <Link href={`/kontakt`} className="btn btn-primary btn-outline">
        <p>Mám zájem</p>
      </Link>
    </div>
  );
}
