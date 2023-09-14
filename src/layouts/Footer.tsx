import { AppStore, GooglePlay } from "../svg";

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
    </footer>
  );
};

export default Footer;
