import StaffCard from "./StaffCard";

const Staff = ({ services, onChangeSlide }) => {
  const allNames = services.reduce((res, currentValue) => {
    return res.concat(currentValue.serviceStaff);
  }, []);
  const uniqueNames = [...new Set(allNames)];

  return (
    <div className="flex flex-col space-y-3 w-11/12 py-10 md:flex-row md:flex-wrap md:space-y-0 md:p-10">
      {uniqueNames.map((name, index) => (
        <StaffCard name={name} key={index} onChangeSlide={onChangeSlide} />
      ))}
    </div>
  );
};

export default Staff;
