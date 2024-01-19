import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Confirmation = ({ services }) => {
  const searchParams = useSearchParams();

  const staffName = searchParams.get("staff");
  const getServiceType = searchParams.get("service");
  const bookingDate = searchParams.get("date");
  const bookingTime = searchParams.get("time");

  const getServiceTypeFormat = getServiceType.replace(/-/g, " ");

  let charges;
  for (const service of services) {
    for (const serviceType of service.serviceTypes) {
      if (serviceType.title === getServiceTypeFormat) {
        console.log(serviceType.title);
        charges = serviceType.charges;
      }
    }
  }
  const userSelectedDate = new Date(bookingDate);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekdayName = weekdays[userSelectedDate.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[userSelectedDate.getMonth()];
  const dateSelected = userSelectedDate.getDate();
  const yearSelected = userSelectedDate.getFullYear();

  return (
    <div className="w-full py-10">
      <div className="w-11/12 mx-auto rounded-lg bg-lightGreyPlus md:w-3/4 lg:w-2/3">
        <div className="py-10 px-6 font-para">
          <div className="flex justify-between items-center text-xl">
            <p>{getServiceTypeFormat}</p>
            <p>{charges}</p>
          </div>
          <hr class="h-px my-8 bg-regularGrey border-0"></hr>
          <div className="my-3">
            <p>
              {weekdayName}, {monthName} {dateSelected}, {yearSelected}
            </p>
            <p>at {bookingTime}</p>
          </div>
          <div className="text-lg my-4">
            30 Minutes Service by{" "}
            <span className="capitalize font-bold font-nav">
              {staffName.replace(/-/g, " ")}
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:my-0 md:mr-4">
              <Link
                className="block py-2 text-lg  bg-regularGrey text-lightGrey rounded-lg uppercase font-semibold hover:bg-darkGreyPlus transition"
                href="/"
              >
                cancel
              </Link>
            </div>
            <div className="w-full text-center order-first my-4 md:my-0 md:order-none">
              <Link
                className="block py-2 text-lg  bg-darkGrey text-lightGrey rounded-lg uppercase font-semibold hover:bg-darkGreyPlus transition"
                href={`/confirm/?staff=${staffName}&service=${getServiceType}&date=${bookingDate}&time=${bookingTime}`}
              >
                confirm booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
