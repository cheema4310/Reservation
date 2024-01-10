import React from "react";
import LocationCard from "./LocationCard";

const OurLocation = () => {
  return (
    <div className="w-full flex flex-col items-center pb-4 md:pb-6">
      <h2 className="text-center text-4xl m-12 p-4 font-nav font-bold text-darkGrey">
        Directions
      </h2>
      <LocationCard />
    </div>
  );
};

export default OurLocation;
