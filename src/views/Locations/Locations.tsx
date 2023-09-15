import { MapDesktop, MapMobile, MapTablet } from "../../assets";
import { Info } from "../../components";

const Locations = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] md:pl-24 md:flex md:items-center md:justify-between careers-hero-mobile md:careers-hero-tablet xl:careers-hero-desktop">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          Locations
        </h2>
        <div className="hidden md:flex items-center gap-6 ml-auto translate-x-8">
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="w-full px-8">
        <div className="w-full mt-[72px]">
          <img src={MapMobile} alt="" className="w-full md:hidden" />
          <img
            src={MapTablet}
            alt=""
            className="w-full hidden md:block xl:hidden"
          />
          <img src={MapDesktop} alt="" className="w-full hidden xl:block" />
        </div>
        <div className="w-full md:hidden py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-10">
          New York
        </div>
        <div className="w-full md:hidden py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4">
          London
        </div>
        <div className="w-full md:hidden py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4">
          Jakarta
        </div>
        <div className="w-full md:hidden py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4 mb-[72px]">
          Yokohama
        </div>
        <div className="w-full xl:w-fit xl:mx-auto">
          <Info
            title="Your City Not Listed?"
            description="If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social."
            button="Message Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
