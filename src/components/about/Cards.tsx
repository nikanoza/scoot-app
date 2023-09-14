import { OurCommunity, OurIntegrity, OurTech } from "../../assets";
import Card from "../shared/Card";

const cards = [
  {
    image: OurTech,
    num: "01",
    title: "Our tech",
    description:
      "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    image: OurIntegrity,
    num: "02",
    title: "Our integrity",
    description:
      "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    image: OurCommunity,
    num: "03",
    title: "Our community",
    description:
      "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

const Cards = () => {
  return (
    <div className="w-full flex flex-col gap-14 items-center mt-16">
      {cards.map((card) => (
        <Card key={card.num} {...card} />
      ))}
    </div>
  );
};

export default Cards;
