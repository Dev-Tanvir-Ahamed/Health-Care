import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../assets/landing_page/facebook.png";
import instragram from "../../../assets/landing_page/instagram.png";
import linkdin from "../../../assets/landing_page/linkedin.png";
import twitter from "../../../assets/landing_page/twitter.png";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-center py-10">
      <Container>
        <div className=" space-x-10">
          <Link href="/consultation">Consultation</Link>
          <Link href="/consultation">Heath Plans</Link>
          <Link href="/consultation">Medicine</Link>
          <Link href="/consultation">Diogonostics</Link>
          <Link href="/consultation">NGOS</Link>
        </div>
        <div className=" space-x-10 flex justify-center py-10 border-dashed border-b-[1px]">
          <Link href="/facebook">
            <Image src={facebook} height={30} width={30} alt="facebook" />
          </Link>
          <Link href="/instragram">
            <Image src={twitter} height={30} width={30} alt="twitter" />
          </Link>
          <Link href="/twitter">
            <Image src={instragram} height={30} width={30} alt="instragram" />
          </Link>
          <Link href="/linkdin">
            <Image src={linkdin} height={30} width={30} alt="linkdin" />
          </Link>
        </div>
        <div className="flex justify-between items-center pt-5">
          <p>@2024PH Health Care.All Rights Reserved</p>
          <Link href="/home">
            <p className=" font-bold text-4xl">
              P<span className="text-primary">H</span> Health Care
            </p>
          </Link>
          <Link href="/termsAndConditions">
            Privacy Policy | Terms and Conditions
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
