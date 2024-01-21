"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { validateInput } from "@utils/validateInputs.js";

const GuestInfoForm = () => {
  // useState declare
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [hasError, setHasError] = useState(false);
  const [lastError, setLastError] = useState("");

  // search Params
  const searchParams = useSearchParams();
  const staffName = searchParams.get("staff");
  const serviceType = searchParams.get("service");
  const dateSelected = searchParams.get("date");
  const timeSelected = searchParams.get("time");

  // Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  const router = useRouter();

  // useEffect Hook
  useEffect(() => {
    setHasError(Object.values(errors).some((error) => error.trim() !== ""));
    const errorsArray = Object.values(errors);
    const filterArray = errorsArray.filter((err) => err !== "");
    setLastError(filterArray.pop());
  }, [errors]);

  // handle onSubmit Event
  const handleSubmit = (e) => {
    e.preventDefault();

    // handling validation onSubmit
    handleValidation(firstNameRef.current.value, "firstName");
    handleValidation(lastNameRef.current.value, "lastName");
    handleValidation(emailRef.current.value, "email");
    handleValidation(phoneNumberRef.current.value, "phoneNumber");

    const guestInfo = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    const bookingInfo = {
      ...guestInfo,
      staffName,
      serviceType,
      dateSelected: new Date(dateSelected),
      timeSelected,
    };

    const isFull = Object.values(guestInfo).some((e) => e.trim() === "");

    if (!hasError && !isFull) {
      const sendData = async () => {
        try {
          await fetch("http://localhost:3000/api/reserve-a-spot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingInfo),
          });
        } catch (error) {
          console.log(error);
        }
      };
      sendData();
      console.log("sendData is running");

      router.push(`/success-note?guest=${guestInfo.firstName}`);
    }
  };

  // validation
  const handleValidation = (inputRefValue, inputField) => {
    validateInput(inputRefValue, inputField, errors, setErrors);
  };

  // handle onChange && onChange validation
  const handleOnChange = (inputRefValue, inputField) => {
    if (errors[inputField]) {
      validateInput(inputRefValue, inputField, errors, setErrors);
    }
  };

  return (
    <form className="font-para" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className={`${
            errors.firstName ? "focus:outline-red-700 text-red-700" : ""
          } border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey`}
          type="text"
          ref={firstNameRef}
          autoFocus
          onChange={() =>
            handleOnChange(firstNameRef.current.value, "firstName")
          }
          placeholder="First Name"
          onBlur={() =>
            handleValidation(firstNameRef.current.value, "firstName")
          }
        />
      </div>
      <div className="mb-4">
        <input
          className={`${
            errors.lastName ? "focus:outline-red-700 text-red-700" : ""
          } border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey`}
          type="text"
          ref={lastNameRef}
          onChange={() => handleOnChange(lastNameRef.current.value, "lastName")}
          placeholder="Last Name"
          onBlur={() => handleValidation(lastNameRef.current.value, "lastName")}
        />
      </div>
      <div className="mb-4">
        <input
          className={`${
            errors.email ? "focus:outline-red-700 text-red-700" : ""
          } border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey`}
          type="text"
          ref={emailRef}
          onChange={() => handleOnChange(emailRef.current.value, "email")}
          placeholder="Email"
          onBlur={() => handleValidation(emailRef.current.value, "email")}
        />
      </div>
      <div className="mb-4">
        <input
          className={`${
            errors.phoneNumber ? "focus:outline-red-700 text-red-700" : ""
          } border-0 outline-none py-2 px-3 w-full text-darkGreyPlus rounded-md focus:bg-lightGreyPlus focus:outline-offset-2 focus:outline-lightGrey`}
          type="text"
          ref={phoneNumberRef}
          onChange={() =>
            handleOnChange(phoneNumberRef.current.value, "phoneNumber")
          }
          placeholder="Phone Number"
          onBlur={() =>
            handleValidation(phoneNumberRef.current.value, "phoneNumber")
          }
        />
      </div>

      {hasError && <p className="text-red-500 px-2 font-bold">{lastError}</p>}

      <div className="pt-2 flex flex-col gap-3 justify-center text-center text-xl font-para font-semibold md:flex-row md:items-center">
        <div className="flex-1 md:order-last">
          <button
            className="w-full uppercase p-1 rounded-md bg-lightGreyPlus text-darkGreyPlus transition hover:bg-lightGrey disabled:hover:bg-lightGreyPlus disabled:opacity-75 disabled:cursor-not-allowed"
            type="submit"
            disabled={hasError}
          >
            next
          </button>
        </div>
        <div className="flex-1 bg-darkGrey text-white rounded-md">
          <Link className="w-full block uppercase p-1" href="/">
            cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default GuestInfoForm;
