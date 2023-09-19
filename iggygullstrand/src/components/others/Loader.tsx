import { TriformLogoIconSVG } from "../../assets";

const Loader = () => {
  return (
    <div className="absolute bg-dark bg-opacity-20 w-full h-screen flex items-center justify-center">
      <img src={TriformLogoIconSVG} alt="TriformLogoIconSVG" />
    </div>
  );
};

export default Loader;
