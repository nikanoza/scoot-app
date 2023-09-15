import { Link } from "react-router-dom";
import { useRef } from "react";

type PropsType = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<PropsType> = ({ setShowMenu }) => {
  const page = useRef<HTMLDivElement | null>(null);
  const closeMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (page.current === event.target) {
      setShowMenu(false);
    }
  };

  return (
    <div
      className="h-[calc(100vh-64px)] w-full absolute top-16 left-0 bg-black bg-opacity-70 md:hidden"
      ref={page}
      onClick={closeMenu}
    >
      <div className="w-64 h-full pb-6 px-8 bg-gray flex flex-col">
        <ul className="list-none mt-16 flex flex-col gap-6">
          <Link
            to="/about"
            className="mono font-bold text-lg text-light-gray"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            to="/locations"
            className="mono font-bold text-lg text-light-gray"
            onClick={() => setShowMenu(false)}
          >
            Location
          </Link>
          <Link
            to="/careers"
            className="mono font-bold text-lg text-light-gray"
            onClick={() => setShowMenu(false)}
          >
            Careers
          </Link>
        </ul>

        <button className="w-full py-3 bg-yellow mono font-bold text-base text-white border-none mt-auto">
          Get Scootin
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
