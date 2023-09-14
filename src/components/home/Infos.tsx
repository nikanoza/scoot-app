import { Info } from "..";
import { NearYou, Payments, Telemetry } from "../../assets";

const Infos = () => {
  return (
    <section className="mt-32 flex flex-col w-full px-8 gap-[120px]">
      <div className="w-full relative">
        <img src={Telemetry} alt="telemetry" className="rounded-full mb-14" />
        <Info
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          button="Learn More"
        />
      </div>
      <div className="w-full">
        <img src={NearYou} alt="telemetry" className="rounded-full mb-14" />
        <Info
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          button="Learn More"
        />
      </div>
      <div className="w-full">
        <img src={Payments} alt="telemetry" className="rounded-full mb-14" />
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
