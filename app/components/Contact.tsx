import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import HorizontalLine1 from "@/app/components/HorizontalLine1";

export default function Contact() {
  return (
    <div className="">
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
      <HorizontalLine1 />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.899287146!2d14.530847808506653!3d49.97837642409624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b91451e15bde1%3A0xa7d5b259e5be3a51!2sFitness%20GYM%20Zdim%C4%9B%C5%99ice!5e0!3m2!1sen!2scz!4v1709398945143!5m2!1sen!2scz"
        width="100%"
        height="300"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <HorizontalLine1 />
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
    </div>
  );
}
