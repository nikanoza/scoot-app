import { Info } from "..";
import { NearYou, Payments, Telemetry } from "../../assets";
import { LeftDownwardArrow, RightArrow } from "../../svg";

const Infos = () => {
  return (
    <section className="mt-32 flex flex-col w-full px-8 md:px-24 xl:px-40 gap-[120px] xl:gap-40">
      <div className="w-full relative xl:flex xl:flex-row-reverse xl:gap-[220px] xl:justify-center">
        <div className="absolute top-40 md:top-72 -right-[420px] md:-right-[100px] xl:-right-[200px] z-20">
          <LeftDownwardArrow />
        </div>
        <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -right-[450px] xl:-right-[520px] z-10"></div>
        <img
          src={Telemetry}
          alt="telemetry"
          className="rounded-full mb-14 md:mx-auto xl:mx-0"
        />
        <Info
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          button="Learn More"
        />
      </div>
      <div className="w-full relative xl:flex xl:gap-[220px] xl:justify-center">
        <div className="absolute top-0 -left-[200px]">
          <RightArrow />
        </div>
        <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -left-[520px] z-10"></div>
        <img
          src={NearYou}
          alt="telemetry"
          className="rounded-full mb-14 md:mx-auto xl:mx-0"
        />
        <Info
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          button="Learn More"
        />
      </div>
      <div className="w-full relative xl:flex xl:flex-row-reverse xl:gap-[220px] xl:justify-center">
        <div className="absolute top-0 -right-[550px] md:-right-[400px] xl:-right-[520px] xl:top-24 z-20">
          <LeftDownwardArrow />
        </div>
        <div className="hidden md:block w-[445px] h-[445px] rounded-full bg-light-gray absolute top-0 -right-[450px] xl:-right-[520px] z-10"></div>
        <img
          src={Payments}
          alt="telemetry"
          className="rounded-full mb-14 md:mx-auto xl:mx-0"
        />
        <Info
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          button="Learn More"
        />
      </div>
    </section>
  );
};

export default Infos;
