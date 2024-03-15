import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10 pt-9 pb-3 bg-footer-img">
      <div className="mx-5">
        <div className="flex flex-row justify-between mb-5 text-white underline">
          <div className="flex flex-col space-y-2">
            <Link href="/">Domu</Link>
            <Link href="/sluzby">Sluzby</Link>
            <Link href="/pujcovna">Pujcovna</Link>
            <Link href="/recenze">Recenze</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <div className="flex flex-col space-y-2 text-right text-white underline">
            <Link href="/pravni/gdpr">GDPR</Link>
            <Link href="/pravni/reklamace">Reklamace</Link>
            <Link href="/pravni/obchodniPodminky">Obchodni podminky</Link>
            <Link href="/pravni/ico">ICO</Link>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-2 text-white">
            <div className="flex flex-row space-x-5">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
            </div>
            <div>© HonzovoTravnik 2024</div>
          </div>
          <div className="flex flex-col space-y-2 text-right text-white">
            <p>Developed by Patrik Holba</p>
            <a href="mailto:paveegamedev@gmail.com">paveegamedev@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
