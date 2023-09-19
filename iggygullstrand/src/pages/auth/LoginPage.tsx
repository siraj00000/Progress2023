import LoginForm from "../../components/LoginForm";
import { saveAuthSession } from "../../utils/actions";

const LoginPage = () => {
  return <LoginForm />;
};

export const action = () => {
  saveAuthSession();
  return true
};

export default LoginPage;
