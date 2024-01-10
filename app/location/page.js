import LocationCard from "@components/homePage/LocationCard";
export default function Location() {
  return (
    <>
      <a
        className="block bg-darkGrey text-lightGrey shadow-lg outline-none text-lg font-para font-bold py-2 px-5 rounded-md mt-24 hover:bg-darkGreyPlus transition-all"
        href="https://www.google.com/maps/place/Jinnah+House/@31.5292232,74.3783481,17z/data=!3m1!4b1!4m6!3m5!1s0x3919050ca3aaaaab:0x3a6f20b15090cc6c!8m2!3d31.5292232!4d74.380923!16s%2Fg%2F11sscs7bqr?entry=ttu"
      >
        Get Directions
      </a>
      <LocationCard />
    </>
  );
}
