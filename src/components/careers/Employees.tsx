import Employee from "./Employee";

const employees = [
  {
    position: "General Manager",
    address: "Jakarta, Indonesia",
  },
  {
    position: "UI/UX Designer",
    address: "Yokohama, Japan",
  },
  {
    position: "Blog Content Copywriter",
    address: "New York, United States",
  },
  {
    position: "Graphic Designer",
    address: "New York, United States",
  },
  {
    position: "Fleet Supervisor",
    address: "Jakarta, Indonesia",
  },
  {
    position: "UX Analyst",
    address: "London, United Kingdom",
  },
];

const Employees = () => {
  return (
    <div className="w-full mt-36">
      <ul className="w-full flex flex-col gap-4 px-8">
        {employees.map((employee) => (
          <Employee key={employee.address} {...employee} />
        ))}
      </ul>
    </div>
  );
};

export default Employees;
