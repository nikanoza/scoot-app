import { BetterLiving, DigitalEra } from "../../assets";
import { LeftUpwardArrow, RightArrow } from "../../svg";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] about-hero-mobile">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          About
        </h2>
      </div>
      <ul className="mt-[72px] flex flex-col gap-[120px] w-full px-8">
        <div className="w-full relative">
          <div className="absolute top-28 -right-[420px]">
            <LeftUpwardArrow />
          </div>
          <img
            src={DigitalEra}
            alt="telemetry"
            className="rounded-full mb-14"
          />
          <div className="w-full flex flex-col gap-8">
            <h3 className="mono text-semi-gray text-[32px] tracking-[-1.429px] font-bold text-center">
              Mobility for the digital era
            </h3>
            <p className="lexend font-normal text-[15px] text-opacity-gray text-center">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <div className="absolute top-0 -left-[150px]">
            <RightArrow />
          </div>
          <img
            src={BetterLiving}
            alt="telemetry"
            className="rounded-full mb-14"
          />
          <div className="w-full flex flex-col gap-8">
            <h3 className="mono text-semi-gray text-[32px] tracking-[-1.429px] font-bold text-center">
              Better urban living
            </h3>
            <p className="lexend font-normal text-[15px] text-opacity-gray text-center">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>
      </ul>
      <h2 className="mono font-bold text-semi-gray text-[32px] text-center mt-[120px]">
        Our values
      </h2>
    </div>
  );
};

export default About;
