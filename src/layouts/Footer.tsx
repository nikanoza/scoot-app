import { Link } from "react-router-dom";
import {
  AppStore,
  Facebook,
  GooglePlay,
  Instagram,
  Logo,
  Twitter,
} from "../svg";

const Footer = () => {
  return (
    <footer className="w-full mt-[120px]">
      <div className="w-full px-8 py-20 footer-mobile flex flex-col items-center gap-20">
        <h2 className="mono font-bold text-white text-[32px] mt-28 text-center">
          Sign up and Scoot off today
        </h2>
        <div className="flex items-center gap-3">
          <AppStore />
          <GooglePlay />
        </div>
      </div>
      <div className="w-full pt-16 pb-20 flex flex-col items-center bg-gray">
        <Link to="/">
          <Logo color="#fff" />
        </Link>
        <ul className="mt-10 flex flex-col gap-4 items-center">
          <Link
            to="/about"
            className="mono font-bold text-lg text-opacity-gray"
          >
            About
          </Link>
          <Link
            to="/locations"
            className="mono font-bold text-lg text-opacity-gray"
          >
            Location
          </Link>
          <Link
            to="/careers"
            className="mono font-bold text-lg text-opacity-gray"
          >
            Careers
          </Link>
        </ul>
        <ul className="mt-20 flex items-center gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
