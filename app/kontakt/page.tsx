import NavBar from "@/app/NavBar";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

export default function Kontakt() {
  return (
    <>
      <NavBar currentPage="kontakt" currentHeading="Kontakt" />
      <main className="p-5 flex flex-col justify-center">
        <div>
          <p className="text-center text-lg">
            Napište mi nebo mi zavolejte a pojďme se vrhnout za perfektním
            trávníkem.
          </p>
        </div>
        <table className="mt-8 w-full table-fixed">
          <tbody>
            <tr>
              <td className="pb-4 w-1/8">
                <MdEmail size={36} />
              </td>
              <td className="pb-4 w-1/2">
                <p className="text-center">janvajs@gmail.com</p>
              </td>
              <td className="pb-4 w-1/4">
                <a
                  className="btn btn-primary w-24"
                  href="mailto:paveegamedev@gmail.com"
                >
                  Napsat
                </a>
              </td>
            </tr>
            <tr>
              <td className="pb-4">
                <FaPhoneAlt size={30} />
              </td>
              <td className="pb-4">
                <p className="text-center">+420 558 456 456</p>
              </td>
              <td className="pb-4">
                <a className="btn btn-primary w-24" href="tel:+420 558 456 456">
                  Zavolat
                </a>
              </td>
            </tr>
            <tr>
              <td className="pb-4">
                <FaHouseChimney size={30} />
              </td>
              <td className="pb-4">
                <p className="text-center">Sokolí 24 Jesenice</p>
              </td>
              <td className="pb-4">
                <a
                  className="btn btn-primary w-24"
                  href="https://www.google.cz/maps/place/Sokolsk%C3%A1+1806%2F24,+120+00+Nov%C3%A9+M%C4%9Bsto/@50.0709946,14.4272579,16.5z/data=!4m6!3m5!1s0x470b948bd5aeea23:0x593bed9f9df84693!8m2!3d50.0721151!4d14.4295909!16s%2Fg%2F11c2dgbdt3?entry=ttu"
                >
                  Vyhledat
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div>
          <p className="text-center text-lg">
            Rád za Vámi přijedu nejen do těchto lokalit:
          </p>
          <ul className="list-none p-5 text-center">
            <li className="font-bold text-xl">Praha</li>
            <li className="text-lg">Jesenice</li>
            <li className="text-lg">Kamenice</li>
            <li className="text-lg">Sulice</li>
          </ul>
        </div>
      </main>
    </>
  );
}
