type PropsType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Action: React.FC<PropsType> = ({ icon, title, description }) => {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {icon}
      <h3 className="mono font-bold text-xl text-semi-gray tracking-[-0.893px] text-center">
        {title}
      </h3>
      <p className="lexend font-normal text-[15px] text-opacity-gray text-center">
        {description}
      </p>
    </div>
  );
};

export default Action;
