type PropsType = {
  position: string;
  address: string;
};

const Employee: React.FC<PropsType> = ({ address, position }) => {
  return (
    <div className="pt-9 pb-8 px-8 bg-light w-full flex flex-col md:flex-row md:justify-between items-center">
      <div className="w-full">
        <h3 className="mono font-bold text-semi-gray text-lg md:text-2xl tracking-[-0.804px]">
          {position}
        </h3>
        <h4 className="lexend font-normal text-semi-gray text-[15px] mt-1">
          {address}
        </h4>
      </div>
      <button className="w-full md:px-16 md:w-fit py-3 bg-yellow mono font-bold text-base text-white border-none mt-4 md:mt-0">
        Apply
      </button>
    </div>
  );
};

export default Employee;
