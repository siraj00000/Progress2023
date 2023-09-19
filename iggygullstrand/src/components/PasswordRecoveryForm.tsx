import { Form, NavLink } from "react-router-dom";
const PasswordRecoveryForm = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Form
        action="/login"
        method="POST"
        className="bg-dark rounded-16 w-2/3 flex flex-col max-w-467 p-32"
      >
        <h1 className="font-poppins font-bold text-32 text-white text-center">
          Recover Your Password
        </h1>

        {/* Lorem Text */}
        <p className="text-12 poppins600 text-grayLight text-center py-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
          auctor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam ac ultricies mauris.
        </p>

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

        {/* Login Submit Button */}
        <button type="submit" className="custom-button poppins600 text-white my-12">
          Recover Password
        </button>

        {/* Don't have an account */}
        <p className="mx-auto text-center text-grayMedium text-15 poppins600 flex items-center gap-2">
          Go back to
          <NavLink to={"/login"} className="text-greenGradLight">
            Login
          </NavLink>
        </p>
      </Form>
    </section>
  );
};

export default PasswordRecoveryForm;
