import { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleIconSVG } from "../assets";
import ComboboxComponent from "./others/ComboBox";
import { CompboListDataTypes } from "../types/index.types";

const AccountType: CompboListDataTypes[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const SignupForm = () => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(false);
  const handleToggleSecurity = () =>
    setIsSecurePassword((preVal: boolean) => !preVal);
  return (
    <section className="w-full  flex items-center justify-center py-4per">
      <Form
        action="/login"
        method="POST"
        className="bg-dark rounded-16 w-2/3 flex flex-col max-w-467 p-32"
      >
        <h1 className="font-poppins font-bold text-34 text-white">
          Register New Account{" "}
        </h1>

        {/* Account Type Dropdown */}
        <label
          htmlFor="accountSelect"
          className="poppins400 text-white text-15 mt-12"
        >
          Account Type
        </label>
        <ComboboxComponent data={AccountType} placeholder="select" />

        {/* Email Adress Input */}
        <label
          htmlFor="emailAddressInput"
          className="poppins400 text-white text-15 mt-12"
        >
          Email
        </label>
        <input
          type="email"
          id="emailAddressInput"
          placeholder="Your email address"
          className="custom-input-field"
        />

        {/* Password Secure Input */}
        <label
          htmlFor="passwordSecureInput"
          className="poppins400 text-white text-15 mt-12 relative"
        >
          Password
          {/* Show password or Hide password Icon */}
          {!isSecurePassword ? (
            <PiEyeClosed
              className="absolute top-12 right-4"
              onClick={handleToggleSecurity}
            />
          ) : (
            <PiEye
              className="absolute top-12 right-4"
              onClick={handleToggleSecurity}
            />
          )}
        </label>
        <input
          type={!isSecurePassword ? "password" : "text"}
          id="passwordSecureInput"
          placeholder="Enter your password"
          className="custom-input-field"
        />

        {/* Confirm Password Secure Input */}
        <label
          htmlFor="passwordSecureInput"
          className="poppins400 text-white text-15 mt-12 relative"
        >
          Confirm Password
          {/* Show password or Hide password Icon */}
          {!isSecurePassword ? (
            <PiEyeClosed
              className="absolute top-12 right-4"
              onClick={handleToggleSecurity}
            />
          ) : (
            <PiEye
              className="absolute top-12 right-4"
              onClick={handleToggleSecurity}
            />
          )}
        </label>
        <input
          type={!isSecurePassword ? "password" : "text"}
          id="passwordSecureInput"
          placeholder="Repeat your password"
          className="custom-input-field"
        />

        {/* Group of remember me checkbox and forgot password button */}
        <aside className="flex items-center justify-between my-12">
          <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-greenDark hover:accent-greenDark w-4 h-4"
              checked
            />{" "}
            Remember Me
          </label>
          <NavLink
            to={"/forgot-password"}
            className="bg-transparent text-15 poppins400 text-greenGradLight"
          >
            Forgot Password?
          </NavLink>
        </aside>

        {/* Login Submit Button */}
        <button
          type="submit"
          className="custom-button poppins600 text-white my-12"
        >
          Register
        </button>

        {/* Term-conditions and privacy policy info */}
        <p className="text-12 poppins400 text-grayLight text-center px-[18%] py-12">
          By creating an account, you agree to our{" "}
          <NavLink to={"#"} className="text-greenGradLight">
            Terms of Use
          </NavLink>{" "}
          and
          <NavLink to={"#"} className="text-greenGradLight">
            {" "}
            Privacy Policy
          </NavLink>
        </p>

        {/* Group of google and facebook login button */}
        <aside className="flex items-center gap-5 my-12">
          <button className="flex-1 flex items-center justify-center gap-5 py-12 px-16 rounded-14 bg-darkPrimary text-15 text-white poppins600">
            <img src={GoogleIconSVG} alt="GoogleIconSVG" className="mb-1" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-5 py-12 px-16 rounded-14 bg-darkPrimary text-15 text-white poppins600">
            <AiFillFacebook size={20} className="mb-1 text-bluePrimary" />
            Facebook
          </button>
        </aside>

        {/* Don't have an account */}
        <p className="mx-auto text-center text-grayMedium text-15 poppins600 flex items-center gap-2">
          Already have an account?
          <NavLink to={"/login"} className="text-greenGradLight">
            Login
          </NavLink>
        </p>
      </Form>
    </section>
  );
};

export default SignupForm;
