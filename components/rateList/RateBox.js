"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RateBox = ({ title, types, onChangeSlide }) => {
  const searchParams = useSearchParams();
  const getStaff = searchParams.get("staff");

  const TypeList = (props) => {
    const getService = props.name.replace(/ /g, "-");
    return (
      <li className="py-3 border-b-[1px] border-darkGrey last:border-0 text-darkGreyPlus md:text-lg">
        <div className="flex justify-between items-center px-1">
          <p className="font-bold basis-3/4">{props.name}</p>
          <p className="basis-1/4 text-end">Rs. {props.charges}</p>
        </div>
        {searchParams.has("staff") && (
          <div className="text-end pt-4">
            <Link
              onClick={onChangeSlide}
              className="py-2 px-7 inline-block bg-darkGrey text-lightGrey rounded-lg hover:bg-darkGreyPlus transition"
              href={`?staff=${getStaff}&service=${getService}`}
            >
              Select
            </Link>
          </div>
        )}
      </li>
    );
  };
  return (
    <div className="bg-lightGreyPlus font-para rounded-lg p-6 md:px-10">
      <div>
        <h4 className="text-center font-bold text-2xl">{title}</h4>
        <ul className="pt-12 md:pt-16">
          {types.map((t, i) => (
            <TypeList key={i} name={t.title} charges={t.charges} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RateBox;
