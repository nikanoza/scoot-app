type PropsType = {
  title: string;
  description: string;
  button: string;
};

const Info: React.FC<PropsType> = ({ title, description, button }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="mono text-semi-gray text-[32px] tracking-[-1.429px] font-bold text-center">
        {title}
      </h3>
      <p className="lexend font-normal text-[15px] text-opacity-gray text-center">
        {description}
      </p>
      <button className="px-10 py-3 bg-yellow mono font-bold text-base text-white border-none">
        {button}
      </button>
    </div>
  );
};

export default Info;
