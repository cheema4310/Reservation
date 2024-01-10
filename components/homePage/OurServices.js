import Image from "next/image";

const OurServices = () => {
  return (
    <div className="container p-5">
      <h2 className="text-center text-4xl mt-12 p-4 font-nav font-extrabold text-darkGrey">
        Our Services
      </h2>

      <div className="my-12 space-y-6 md:flex md:space-x-12 md:space-y-0">
        <div className="flex flex-col justify-center items-center space-y-6 py-6 md:basis-1/3">
          <Image
            className="rounded-full bg-lightGreyPlus"
            src="/assets/icons/haircut.svg"
            width={70}
            height={70}
          />
          <h4 className="font-nav font-bold text-xl">Haircut & Styling</h4>
          <p className="text-center font-para text-darkGrey">
            Sleek looks created with careful cutting for everyone—women, men,
            and kids.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 md:basis-1/3">
          <Image
            className="rounded-full bg-lightGreyPlus"
            src="/assets/icons/coloring.svg"
            width={70}
            height={70}
          />
          <h4 className="font-nav font-bold text-xl">Coloring & Highlights</h4>
          <p className="text-center font-para text-darkGrey">
            Achieve the hair color of your dreams with flawless Balayage, Ombre,
            highlights, or any desired hair color.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 md:basis-1/3">
          <Image
            className="rounded-full bg-lightGreyPlus"
            src="/assets/icons/hair-ext.svg"
            width={70}
            height={70}
          />
          <h4 className="font-nav font-bold text-xl">Hair Extensions</h4>
          <p className="text-center font-para text-darkGrey">
            Explore our range of 100% human hair extensions in Hand Tied,
            Fusion, Tape-in, or Clip-in options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
