import { MobileMenu } from "../components";
import { Hamburger, Logo } from "../svg";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white flex px-8 items-center relative z-20">
      <MobileMenu />
      <Hamburger onClick={() => {}} />
      <Logo color="#495567" className="mx-auto -translate-x-5" />
    </header>
  );
};

export default Header;
