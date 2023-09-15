import { Locate, Ride, Scooter } from "../../svg";
import Action from "./Action";

const actions = [
  {
    icon: <Locate />,
    title: "Locate with app",
    description:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    icon: <Scooter />,
    title: "Pick your scooter",
    description:
      "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    icon: <Ride />,
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

const Actions = () => {
  return (
    <div className="w-full px-8 md:px-24 pt-28 xl:pt-40 xl:px-40 relative">
      <div className="hidden md:block w-[30px] h-[512px] bg-light-gray absolute z-10 -mt-28 ml-8 xl:hidden"></div>
      <div className="hidden w-[974px] h-[15px] bg-light-gray absolute z-10 mt-10 left-0 xl:block"></div>
      <ul className="w-full flex flex-col xl:flex-row gap-12 xl:gap-8 relative z-20">
        {actions.map((action) => (
          <Action key={action.title} {...action} />
        ))}
      </ul>
    </div>
  );
};

export default Actions;
