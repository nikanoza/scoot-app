import { MapMobile } from "../../assets";

const Locations = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] careers-hero-mobile">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          Locations
        </h2>
      </div>
      <div className="w-full px-8 mt-[72px]">
        <img src={MapMobile} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Locations;
