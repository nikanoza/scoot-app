type PropsType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Action: React.FC<PropsType> = ({ icon, title, description }) => {
  return (
    <div className="w-full flex flex-col md:justify-between md:flex-row items-center gap-6 md:gap-20">
      {icon}
      <div className="md:w-[398px]">
        <h3 className="mono font-bold text-xl text-semi-gray tracking-[-0.893px] text-center md:text-left">
          {title}
        </h3>
        <p className="lexend font-normal text-[15px] text-opacity-gray text-center md:text-left md:mt-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Action;
