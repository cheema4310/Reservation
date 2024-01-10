import Image from "next/image";
import Link from "next/link";

const StaffCard = ({ name, onChangeSlide }) => {
  const fullName = name.replace(" ", "-");
  const imageUrl = fullName.concat(".svg");

  return (
    <div className="flex flex-col items-center space-y-4 bg-lightGreyPlus p-4 md:basis-1/2 md:border-4 md:border-lightGrey">
      <div className="flex justify-between items-center w-full p-2">
        <Image
          src={`/assets/avatar/${imageUrl}`}
          alt="person"
          width={70}
          height={70}
          className="bg-lightGrey rounded-full border-4 border-darkGrey"
        />
        <h4 className="font-nav font-bold text-lg text-darkGrey capitalize">
          {name}
        </h4>
      </div>
      <div className="w-full">
        <Link
          onClick={onChangeSlide}
          href={`?staff=${fullName}`}
          className="w-full block text-center py-2 rounded-lg font-para bg-darkGrey text-white text-xl hover:bg-darkGreyPlus"
        >
          View Services
        </Link>
      </div>
    </div>
  );
};

export default StaffCard;
