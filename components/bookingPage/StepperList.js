const StepperList = ({ count, step, slide }) => {
  return (
    <li className="flex flex-col items-center space-y-2 flex-1 font-bold font-nav text-md md:text-lg">
      <div
        className={`${count === 5 && "after:hidden"} ${
          count <= slide
            ? "bg-darkGrey after:bg-darkGrey text-lightGrey"
            : "bg-lightGreyPlus after:bg-lightGreyPlus"
        } flex justify-center items-center w-10 h-10 rounded-full  relative after:content-[' '] after:absolute after:left-full after:w-[150%] after:h-px`}
      >
        {count}
      </div>
      <div className="capitalize">{step}</div>
    </li>
  );
};

export default StepperList;
