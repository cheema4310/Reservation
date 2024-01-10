"use client";
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateCalender = ({ onChangeSlide }) => {
  const [value, setValue] = useState(new Date());

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const staffName = searchParams.get("staff");
  const serviceType = searchParams.get("service");
  const url = `${pathname}?staff=${staffName}&service=${serviceType}`;

  // const selectedDate = value.toString();

  const handleDisable = ({ activeStartDate, date, view }) =>
    date.getDay() === 5;

  const onChangeDate = (val) => {
    setValue(val);
    const formattedDate = val.toLocaleDateString("en-CA");

    router.push(`${url}&date=${formattedDate}`);

    onChangeSlide();
  };

  return (
    <div className="flex justify-center py-10 min-h-[70vh]">
      <div className="w-full flex-1 sm:w-11/12  md:w-8/12 lg:w-1/2">
        <div className="bg-lightGreyPlus p-5 rounded-xl">
          <div className="">
            <Calendar
              minDate={new Date()}
              tileDisabled={handleDisable}
              value={value}
              onChange={onChangeDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateCalender;
