import { RightArrow } from "../../svg";

const Banner = () => {
  return (
    <div className="w-full h-[650px] home-hero-mobile flex flex-col items-center px-8">
      <h2 className="mono font-bold text-white text-[40px] mt-28 text-center">
        Scooter sharing made simple
      </h2>
      <p className="lexend font-normal text-[15px] text-white mt-5 text-center">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <button className="px-10 py-3 bg-yellow mono font-bold text-base text-white border-none mt-9">
        Get Scootin
      </button>
      <RightArrow className="absolute top-[540px] -left-80" />
    </div>
  );
};

export default Banner;