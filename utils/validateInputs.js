export const validateInput = (inputRef, inputField, errors, setErrors) => {
  const value = inputRef.trim();
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
  } else if (inputField === "email") {
    if (!value) {
      setErrors({ ...errors, [inputField]: "Email Address is Required" });
    } else {
      const checkValue = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        value
      );
      checkValue
        ? setErrors({ ...errors, [inputField]: "" })
        : setErrors({ ...errors, [inputField]: "Invalid Email Address" });
    }
  } else if (inputField === "phoneNumber") {
    if (!value) {
      setErrors({ ...errors, [inputField]: "Phone Number is Required" });
    } else {
      const checkValue = /^\d{11,}$/.test(value);
      checkValue
        ? setErrors({ ...errors, [inputField]: "" })
        : setErrors({ ...errors, [inputField]: "Invalid Phone Number" });
    }
  }
};
