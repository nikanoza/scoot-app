import { JoinUs } from "../../assets";
import { Cards, Employees, Info } from "../../components";
import { LeftDownwardArrow } from "../../svg";

const Careers = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] md:pl-24 md:flex md:items-center md:justify-between careers-hero-mobile md:careers-hero-tablet xl:careers-hero-desktop">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          careers
        </h2>
        <div className="hidden md:flex items-center gap-6 ml-auto translate-x-8">
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="w-full md:px-24 mt-[72px] relative xl:flex xl:flex-row-reverse xl:gap-[220px] xl:justify-center">
        <div className="absolute top-40 md:top-72 -right-[420px] md:-right-[100px] xl:-right-[200px] z-20">
          <LeftDownwardArrow />
        </div>
        <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -right-[450px] md:-right-[350px] xl:-right-[520px] z-10"></div>
        <img
          src={JoinUs}
          alt="telemetry"
          className="rounded-full mb-14 md:mx-auto xl:mx-0"
        />
        <Info
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          button="Say Hello"
        />
      </div>
      <h2 className="mono font-bold text-semi-gray text-[32px] text-center mt-[120px]">
        Why join us?
      </h2>
      <Cards />
      <Employees />
    </div>
  );
};

export default Careers;
