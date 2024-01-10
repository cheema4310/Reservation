"use client";
import { useState } from "react";

import CommonArea from "./CommonArea";
import Service from "./Service";
import Staff from "./Staff";
import DateCalender from "./DateCalender";
import { useRouter } from "next/navigation";
import SelectTime from "./SelectTime";
import Confirmation from "./Confirmation";

const MainPage = ({ services }) => {
  const [slide, setSlide] = useState(1);
  const router = useRouter();

  const sildeChangeHandler = () => {
    setSlide((preVal) => preVal < 6 && preVal + 1);
  };
  const backBtnHandler = () => {
    router.back();
    setSlide((preVal) => preVal > 1 && preVal - 1);
  };
  return (
    <>
      <CommonArea slide={slide} />
      <div className=" w-11/12 mt-10 md:w-4/5 lg:w-[84.5%]">
        <button
          onClick={backBtnHandler}
          className="px-5 py-2 text-lg bg-darkGrey rounded-lg text-lightGrey hover:bg-darkGreyPlus md:text-xl"
        >
          Back
        </button>
      </div>

      {slide === 1 && (
        <Staff services={services} onChangeSlide={sildeChangeHandler} />
      )}

      {slide === 2 && (
        <Service services={services} onChangeSlide={sildeChangeHandler} />
      )}

      {slide === 3 && <DateCalender onChangeSlide={sildeChangeHandler} />}

      {slide === 4 && <SelectTime onChangeSlide={sildeChangeHandler} />}

      {slide === 5 && <Confirmation services={services} />}
    </>
  );
};

export default MainPage;
