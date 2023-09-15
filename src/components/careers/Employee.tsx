type PropsType = {
  position: string;
  address: string;
};

const Employee: React.FC<PropsType> = ({ address, position }) => {
  return (
    <div className="pt-9 pb-8 px-8 bg-light w-full flex flex-col items-center">
      <h3 className="mono font-bold text-semi-gray text-lg">{position}</h3>
      <h4 className="lexend font-normal text-semi-gray text-[15px] mt-1">
        {address}
      </h4>
      <button className="w-full py-3 bg-yellow mono font-bold text-base text-white border-none mt-4">
        Apply
      </button>
    </div>
  );
};

export default Employee;
