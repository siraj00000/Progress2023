import { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleIconSVG } from "../assets";
import CustomCheckbox from "./others/Checkbox";
const LoginForm = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(false);
  const handleToggleSecurity = () =>
    setIsSecurePassword((preVal: boolean) => !preVal);
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Form
        action="/login"
        method="POST"
        className="bg-dark rounded-16 w-2/3 flex flex-col max-w-467 p-32"
      >
        <h1 className="font-poppins font-bold text-36 text-white">
          Login to Your Account
        </h1>

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

        {/* Group of remember me checkbox and forgot password button */}
        <aside className="flex items-center justify-between my-12">
          <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
            <CustomCheckbox
              checkedColor="greenGradLight"
              uncheckedColor="darkHard"
              onChange={() => setIsSelected(!isSelected)}
              checked={isSelected}
            />
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
          Log In
        </button>

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
          Don't have an account?
          <NavLink to={"/sign-up"} className="text-greenGradLight">
            Register
          </NavLink>
        </p>
      </Form>
    </section>
  );
};

export default LoginForm;
