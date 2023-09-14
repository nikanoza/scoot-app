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
      <Cards />
      <h2 className="mono font-bold text-semi-gray text-[32px] text-center mt-36">
        FAQs
      </h2>
      <h3 className="mono font-bold text-semi-gray text-2xl text-center mt-12">
        How it works
      </h3>
      <ul className="w-full flex flex-col gap-4 px-8 mt-8">
        {works.map((work) => (
          <Question key={work.question} {...work} />
        ))}
      </ul>
      <h3 className="mono font-bold text-semi-gray text-2xl text-center mt-12">
        Safe driving
      </h3>
      <ul className="w-full flex flex-col gap-4 px-8 mt-8">
        {safe.map((work) => (
          <Question key={work.question} {...work} />
        ))}
      </ul>
    </div>
  );
};

export default About;
