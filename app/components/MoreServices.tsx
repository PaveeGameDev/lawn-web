import Link from "next/link";

export default function MoreServices() {
  return (
    <div className="w-full flex justify-center">
      <Link href="sluzby" className="btn  btn-primary btn-wide h-16">
        <div>
          <p className="mb-1 text-lg"> Dalsi sluzby</p>
          <p>(sekání,hnojení,zakládání trávniku)</p>
        </div>
      </Link>
    </div>
  );
}
