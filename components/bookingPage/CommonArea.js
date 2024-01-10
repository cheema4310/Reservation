import StepperList from "./StepperList";

const CommonArea = ({ slide }) => {
  const stepper = [
    { count: 1, step: "staff" },
    { count: 2, step: "service" },
    { count: 3, step: "date" },
    { count: 4, step: "time" },
    { count: 5, step: "confirm" },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full text-center">
        <h2 className="font-black font-para text-3xl my-5 md:text-4xl md:my-10">
          Appointment
        </h2>
      </div>
      <div className="w-5/6 md:w-1/2 lg:w-1/3">
        <ul className="flex justify-center items-center">
          {stepper.map((item) => (
            <StepperList
              count={item.count}
              step={item.step}
              key={item.step}
              slide={slide}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonArea;
