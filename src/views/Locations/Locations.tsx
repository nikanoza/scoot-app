import { MapMobile } from "../../assets";
import { Info } from "../../components";

const Locations = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] careers-hero-mobile">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          Locations
        </h2>
      </div>
      <div className="w-full px-8">
        <div className="w-full mt-[72px]">
          <img src={MapMobile} alt="" className="w-full" />
        </div>
        <div className="w-full py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-10">
          New York
        </div>
        <div className="w-full py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4">
          London
        </div>
        <div className="w-full py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4">
          Jakarta
        </div>
        <div className="w-full py-5 bg-yellow bg-opacity-20 font-bold mono text-semi-gray text-2xl text-center mt-4 mb-[72px]">
          Yokohama
        </div>
        <Info
          title="Your City Not Listed?"
          description="If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social."
          button="Message Us"
        />
      </div>
    </div>
  );
};

export default Locations;
