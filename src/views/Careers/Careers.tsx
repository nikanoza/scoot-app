import { JoinUs } from "../../assets";
import { Info } from "../../components";
import { LeftDownwardArrow } from "../../svg";

const Careers = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] careers-hero-mobile">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          Careers
        </h2>
      </div>
      <div className="w-full relative mt-[72px] px-8">
        <div className="absolute top-40 -right-[420px]">
          <LeftDownwardArrow />
        </div>
        <img src={JoinUs} alt="telemetry" className="rounded-full mb-14" />
        <Info
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          button="Say Hello"
        />
      </div>
    </div>
  );
};

export default Careers;
