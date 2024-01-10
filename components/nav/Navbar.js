import Image from "next/image";
import NavList from "./NavList";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center px-3 pt-2 text-darkGreyPlus w-5/6 mx-auto md:px-6">
      <Link href="/" className="rounded-full shadow-customInner cursor-pointer">
        <Image
          src="/assets/images/nav-logo.svg"
          alt="shop logo"
          width={80}
          height={80}
          priority={true}
        />
      </Link>
      <div className="hidden md:block">
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
