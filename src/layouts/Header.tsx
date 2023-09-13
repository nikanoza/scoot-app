import { MobileMenu } from "../components";
import { Close, Hamburger, Logo } from "../svg";

type PropsType = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const Header: React.FC<PropsType> = ({ showMenu, setShowMenu }) => {
  return (
    <header className="w-full h-16 bg-white flex px-8 items-center relative z-20">
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}
      <Logo color="#495567" className="mx-auto -translate-x-5" />
    </header>
  );
};

export default Header;
