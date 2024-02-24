import Link from "next/link";

export default function MoreServices() {
  return (
    <div className="w-full flex justify-center">
      <Link href="sluzby" className="btn btn-outline btn-primary w-1/2 h-16">
        Další služby
      </Link>
    </div>
  );
}
