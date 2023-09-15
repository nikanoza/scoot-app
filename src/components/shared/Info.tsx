type PropsType = {
  title: string;
  description: string;
  button: string;
};

const Info: React.FC<PropsType> = ({ title, description, button }) => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-10 xl:max-w-[445px]">
      <h3 className="mono md:w-[457px] mx-auto text-semi-gray text-[32px] md:text-[48px] tracking-[-1.429px] md:tracking-[-2.143px] font-bold text-center xl:text-left">
        {title}
      </h3>
      <p className="lexend font-normal text-[15px] text-opacity-gray text-center xl:text-left">
        {description}
      </p>
      <button className="px-10 w-fit mx-auto xl:ml-0 py-3 bg-yellow mono font-bold text-base text-white border-none">
        {button}
      </button>
    </div>
  );
};

export default Info;
