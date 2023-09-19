import Image from "next/image";
import { ThirdPartyLogisticsTypes } from "@/types/index.types";

const CargosCard: React.FC<ThirdPartyLogisticsTypes> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <figure className="h-248 cursor-pointer relative z-20">
      <div className="lg:flex-1 w-238 bg-light p-2 rounded-24 shadow-shadowGray group parent shadow-2xl transition ease-in-out delay-150 hover:-translate-y-5">
        <Image src={Icon} className="w-auto h-auto object-contain" alt="Icon" />
        <h6 className="text14 font-nunito700 text-activeTab mt-2">
          {title.split(" ")[0]}{" "}
          <span className="font-nunito400">{title.split(" ")[1]}</span>
        </h6>
        <div className="w-full bg-dimLight h-1 rounded-md shadow-inner shadow-shadowGray my-1">
          <div className="hoverMebottom"></div>
        </div>
        <p className="text14 font-nunito700 text-activeTab group-hover:text-secondary mb-1">
          {description}
        </p>
      </div>
    </figure>
  );
};

export default CargosCard;
