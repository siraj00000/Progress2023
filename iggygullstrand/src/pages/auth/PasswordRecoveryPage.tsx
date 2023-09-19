import PasswordRecoveryForm from "../../components/PasswordRecoveryForm";
import { saveAuthSession } from "../../utils/actions";

const PasswordRecoveryPage = () => {
  return <PasswordRecoveryForm />;
};

export const action = () => {
  saveAuthSession();
  return true;
};

export default PasswordRecoveryPage;
