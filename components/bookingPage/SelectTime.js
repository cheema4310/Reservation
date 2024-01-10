import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SelectTime = ({ onChangeSlide }) => {
  const searchParams = useSearchParams();

  const staffName = searchParams.get("staff");
  const serviceType = searchParams.get("service");

  const getSelectedDate = searchParams.get("date");
  let selectedDate = new Date(getSelectedDate);
  //   useEffect(() => {

  //   }, [searchParams]);

  // console.log(selectedDate.getDate());

  const dateAndTimeNow = new Date();

  const dateNowYear = dateAndTimeNow.getFullYear();
  const dateNowMonth = dateAndTimeNow.getMonth();
  const dateNowDay = dateAndTimeNow.getDate();

  let availableHoursToSelect = [];

  for (let i = 9; i <= 19; i++) {
    availableHoursToSelect.push(i);
  }
  // console.log(availableHoursToSelect);

  if (
    dateNowYear === selectedDate.getFullYear() &&
    dateNowMonth === selectedDate.getMonth() &&
    dateNowDay === selectedDate.getDate()
  ) {
    const currentHour = dateAndTimeNow.getHours();

    const currentTime = dateAndTimeNow.toLocaleTimeString("en-US");
    const midday = currentTime.split(" ")[1];

    // console.log(timeNowHour, midday);

    if (currentHour >= 19) {
      return (
        <div className="w-full h-[70vh] py-[4rem]">
          <p className="w-5/6 mx-auto text-center font-para text-xl text-darkGreyplus md:w-3/4 lg:w-1/2">
            Our salon offers extended hours for your convenience! Tomorrow, we
            will be open from 9:00 AM to 8:00 PM. Appointments are encouraged,
            but walk-ins are always welcome. To secure your spot, Go{" "}
            <strong>back</strong> and book an appointment for tomorrow or in the
            coming days
          </p>
        </div>
      );
    } else if (currentHour >= 9 && currentHour < 19) {
      const filterHours = availableHoursToSelect.filter(
        (hr) => hr > currentHour
      );
      availableHoursToSelect = filterHours;
    }
  }

  let timeInMiddayFormate = [];
  availableHoursToSelect.forEach((hours) => {
    if (hours > 12) {
      timeInMiddayFormate.push(`${hours - 12} PM`);
    } else if (hours <= 12) {
      timeInMiddayFormate.push(`${hours} AM`);
    }
  });

  return (
    <div className="w-full py-10">
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto w-11/12 sm:w-5/6">
        {timeInMiddayFormate.map((hrToSelect) => (
          <div className="basis-1/4 text-center p-4 font-para bg-lightGreyPlus rounded-md">
            <p className="font-semibold text-lg">{hrToSelect}</p>
            <div className="pt-3">
              <Link
                onClick={() => onChangeSlide()}
                className="px-4 py-1 text-xl rounded-md text-lightGrey bg-darkGrey hover:bg-darkGreyPlus"
                href={`?staff=${staffName}&service=${serviceType}&date=${getSelectedDate}&time=${hrToSelect}`}
              >
                Select
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTime;
