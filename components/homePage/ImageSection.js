import Link from "next/link";
import classes from "./ImageSection.module.css";

const ImageSection = () => {
  return (
    <div className={`${classes.bgImage}`}>
      <div className={`${classes.textAndActions}`}>
        <h1 className="font-display text-4xl md:text-7xl">Anu Cuts</h1>
        <h4 className="font-para text-md md:text-lg text-regularGrey">
          Reservations System Catering to Hair Salons and Barbershops
        </h4>
        <Link
          href="/book"
          className="px-6 py-2 bg-darkGreyPlus rounded-md font-nav text-2xl cursor-pointer transition-all hover:scale-105 focus:scale-95 border-2 border-lightGrey"
        >
          Book Your Session
        </Link>
      </div>
    </div>
  );
};

export default ImageSection;
