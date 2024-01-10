import Link from "next/link";

const NavList = () => {
  return (
    <ul className="flex space-x-8">
      <li className="flex items-center rounded-md bg-transparent text-lg font-black font-nav transition-all hover:bg-darkGreyPlus hover:text-lightGrey">
        <Link className="px-4 py-1" href="/">
          Home
        </Link>
      </li>
      <li className="flex items-center rounded-md bg-transparent text-lg font-black font-nav transition-all hover:bg-darkGreyPlus hover:text-lightGrey">
        <Link className="px-4 py-1" href="/rates">
          Services
        </Link>
      </li>
      <li className="flex items-center rounded-md bg-transparent text-lg font-black font-nav transition-all hover:bg-darkGreyPlus hover:text-lightGrey">
        <Link className="px-4 py-1" href="/location">
          Directions
        </Link>
      </li>

      <li className="flex items-center rounded-md text-lg font-black font-nav bg-darkGrey text-lightGrey hover:scale-105 hover:bg-darkGreyPlus transition-all">
        {/* Using <a> instead of Link from "next/link" intentionally*/}
        <a className="px-4 py-1" href="/book">
          Book Your Session
        </a>
      </li>
    </ul>
  );
};

export default NavList;
