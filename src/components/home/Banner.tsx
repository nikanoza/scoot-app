import { RightArrow } from "../../svg";

const Banner = () => {
  return (
    <div className="w-full h-[650px] home-hero-mobile md:home-hero-tablet flex flex-col items-center px-8 md:px-24">
      <h2 className="mono font-bold text-white text-[40px] md:text-[56px] mt-28 text-center">
        Scooter sharing made simple
      </h2>
      <p className="lexend font-normal text-[15px] text-white mt-5 md:mt-6 text-center">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <button className="px-10 py-3 bg-yellow mono font-bold text-base text-white border-none mt-9 md:mt-8">
        Get Scootin
      </button>
      <div className="hidden md:flex items-center gap-6 mt-20 ml-auto translate-x-32">
        <div className="w-16 h-16 border-4 rounded-full border-white"></div>
        <div className="w-16 h-16 border-4 rounded-full border-white"></div>
        <div className="w-16 h-16 rounded-full bg-white"></div>
      </div>
      <RightArrow className="absolute top-[540px] -left-80 md:-left-40" />
    </div>
  );
};

export default Banner;
