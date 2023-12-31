import { BetterLiving, DigitalEra } from "../../assets";
import { Cards, Question } from "../../components";
import { LeftUpwardArrow, RightArrow } from "../../svg";

const works = [
  {
    question: "How do I download the app?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "Can I find a nearby Scoots?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "Do I need a license to ride?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

const safe = [
  {
    question: "Should I wear a helmet?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    question: "How about the rules & regulations?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    question: "What if I damage my Scoot?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
];

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full py-[60px] md:pl-24 md:flex md:items-center md:justify-between about-hero-mobile md:about-hero-tablet xl:about-hero-desktop">
        <h2 className="mono font-bold text-white text-[40px] text-center">
          About
        </h2>
        <div className="hidden md:flex items-center gap-6 ml-auto translate-x-8">
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 border-4 rounded-full border-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
        </div>
      </div>
      <ul className="mt-[72px] flex flex-col gap-[120px] w-full px-8 md:px-24">
        <div className="w-full relative xl:flex xl:flex-row-reverse xl:gap-[220px] xl:justify-center">
          <div className="absolute top-40 md:top-72 -right-[420px] md:-right-[100px] xl:-right-[200px] z-20">
            <LeftUpwardArrow />
          </div>
          <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -right-[450px] xl:-right-[480px] z-10"></div>
          <img
            src={DigitalEra}
            alt="telemetry"
            className="rounded-full mb-14 md:mx-auto xl:mx-0"
          />
          <div className="w-full flex flex-col gap-8 md:gap-10 mx-auto md:mx-0 xl:max-w-[445px]">
            <h3 className="mono text-semi-gray text-[32px] md:text-[48px] md:max-w-[457px] md:mx-auto tracking-[-1.429px] font-bold text-center xl:text-left">
              Mobility for the digital era
            </h3>
            <p className="lexend font-normal text-[15px] text-opacity-gray text-center xl:text-left">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </div>
        <div className="w-full relative xl:flex xl:gap-[220px] xl:justify-center">
          <div className="absolute top-0 -left-[150px]">
            <RightArrow />
          </div>
          <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -left-[420px] z-10"></div>
          <img
            src={BetterLiving}
            alt="telemetry"
            className="rounded-full mb-14 md:mx-auto xl:mx-0"
          />
          <div className="w-full flex flex-col gap-8 md:gap-10 mx-auto md:mx-0 xl:max-w-[445px]">
            <h3 className="mono text-semi-gray text-[32px] md:text-[48px] md:max-w-[457px] md:mx-auto tracking-[-1.429px] font-bold text-center xl:text-left">
              Better urban living
            </h3>
            <p className="lexend font-normal text-[15px] text-opacity-gray text-center xl:text-left">
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
      <Cards />
      <h2 className="mono font-bold text-semi-gray text-[32px] text-center mt-36">
        FAQs
      </h2>
      <div className="w-full mt-12 xl:flex xl:gap-10 xl:justify-center">
        <h3 className="mono font-bold text-semi-gray text-2xl xl:text-[40px] text-center">
          How it works
        </h3>
        <ul className="w-full xl:w-fit flex flex-col gap-4 px-8 mt-8 xl:mt-0">
          {works.map((work) => (
            <Question key={work.question} {...work} />
          ))}
        </ul>
      </div>
      <div className="w-full mt-12 xl:flex xl:gap-10 xl:justify-center">
        <h3 className="mono font-bold text-semi-gray text-2xl xl:text-[40px] text-center">
          Safe driving
        </h3>
        <ul className="w-full xl:w-fit flex flex-col gap-4 px-8 mt-8 xl:mt-0">
          {safe.map((work) => (
            <Question key={work.question} {...work} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
