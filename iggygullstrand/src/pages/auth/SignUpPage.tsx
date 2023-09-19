import SignUpForm from "../../components/SignupForm";
import { saveAuthSession } from "../../utils/actions";

const SignUpPage = () => {
  return <SignUpForm />;
};

export const action = () => {
  saveAuthSession();
  return true
};

export default SignUpPage;
