import { Link } from "react-router-dom";

type PropsType = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<PropsType> = ({ setShowMenu }) => {
  return (
    <div className="w-64 h-[calc(100vh-64px)] absolute pb-6 px-8 top-16 left-0 bg-gray flex flex-col">
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
  );
};

export default MobileMenu;
