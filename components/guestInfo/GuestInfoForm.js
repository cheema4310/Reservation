"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

const GuestInfoForm = () => {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const searchParams = useSearchParams();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  const validateInput = (inputRef, inputField) => {
    const value = inputRef.current.value.trim();
    if (inputField === "firstName") {
      if (!value) {
        setErrors({ ...errors, [inputField]: "First Name is Required" });
      } else {
        const checkValue = /^[a-zA-Z]+$/.test(value);
        checkValue
          ? setErrors({ ...errors, [inputField]: "" })
          : setErrors({ ...errors, [inputField]: "Invalid First Name" });
      }
    } else if (inputField === "lastName") {
      if (!value) {
        setErrors({ ...errors, [inputField]: "Last Name is Required" });
      } else {
        const checkValue = /^[a-zA-Z]+$/.test(value);
        checkValue
          ? setErrors({ ...errors, [inputField]: "" })
          : setErrors({ ...errors, [inputField]: "Invalid Last Name" });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="font-para" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey"
          type="text"
          ref={firstNameRef}
          placeholder="First Name"
          onBlur={() => validateInput(firstNameRef, "firstName")}
        />
      </div>
      <div className="mb-4">
        <input
          className="border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey"
          type="text"
          ref={lastNameRef}
          onChange={() => validateInput(lastNameRef, "lastName")}
          placeholder="Last Name"
          onBlur={() => validateInput(lastNameRef, "lastName")}
        />
      </div>
      <div className="mb-4">
        <input
          className="border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey"
          type="text"
          ref={emailRef}
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          className="border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey"
          type="text"
          ref={phoneNumberRef}
          placeholder="Phone Number"
        />
      </div>
      {errors.firstName}
      {errors.lastName}
      <div className="pt-2 flex flex-col gap-3 justify-center text-center text-xl font-nav font-bold md:flex-row md:items-center">
        <div className="flex-1 bg-darkGrey text-white rounded-md">
          <Link className="w-full block uppercase p-1" href="/">
            cancel
          </Link>
        </div>
        <div className="flex-1 bg-lightGreyPlus text-darkGreyPlus rounded-md hover:bg-lightGrey transition">
          <button className="w-full uppercase p-1" type="submit">
            next
          </button>
        </div>
      </div>
    </form>
  );
};

export default GuestInfoForm;
