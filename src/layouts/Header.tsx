import { MobileMenu } from "../components";
import { Close, Hamburger, Logo } from "../svg";
import { Link } from "react-router-dom";

type PropsType = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const Header: React.FC<PropsType> = ({ showMenu, setShowMenu }) => {
  return (
    <header className="w-full h-16 md:h-24 bg-white flex px-8 md:px-10 xl:px-[169px] items-center relative z-20">
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}
      <Link
        to="/"
        onClick={() => setShowMenu(false)}
        className="mx-auto md:mx-0 -translate-x-5 md:-translate-x-0"
      >
        <Logo color="#495567" />
      </Link>
      <ul className="md:flex gap-8 items-center ml-14 hidden">
        <Link
          to="/about"
          className="mono font-bold text-[15px] text-opacity-gray"
        >
          About
        </Link>
        <Link
          to="/locations"
          className="mono font-bold text-[15px] text-opacity-gray"
        >
          Location
        </Link>
        <Link
          to="/careers"
          className="mono font-bold text-[15px] text-opacity-gray"
        >
          Careers
        </Link>
      </ul>
      <button className="hidden md:block px-10 w-fit ml-auto py-3 bg-yellow mono font-bold text-base text-white border-none">
        Get Scootin
      </button>
    </header>
  );
};

export default Header;
