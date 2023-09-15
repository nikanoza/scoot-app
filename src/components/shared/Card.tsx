type PropsType = {
  image: string;
  num: string;
  title: string;
  description: string;
};

const Card: React.FC<PropsType> = ({ image, num, title, description }) => {
  return (
    <div className="w-full xl:w-fit flex flex-col items-center">
      <img
        src={image}
        alt="card poster"
        className="w-[240px] h-[240px] rounded-full"
      />
      <div className="w-24 h-24 rounded-full bg-yellow flex items-center justify-center -mt-14">
        <h3 className="mono font-bold text-2xl text-semi-gray">{num}</h3>
      </div>
      <h3 className="mono font-bold text-2xl text-semi-gray mt-4">{title}</h3>
      <p className="mt-7 lexend font-normal text-[15px] text-opacity-gray text-center md:max-w-[457px]">
        {description}
      </p>
    </div>
  );
};

export default Card;
