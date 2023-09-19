import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  avaFront: string | StaticImageData;
  avaBack: string | StaticImageData;
};

const Avatars: React.FC<Props> = ({ avaFront, avaBack }) => {
  return (
    <figure className="flex items-center">
      <Image
        src={avaFront}
        className="w-auto h-auto object-contain rounded-full border-4 border-light relative z-10 shadow-xl shadow-shadowGray"
        width={32}
        height={32}
        alt=""
      />
      <Image
        src={avaBack}
        className="w-auto h-auto object-cover rounded-full border-4 border-light relative -left-4 z-0 shadow-xl shadow-shadowGray"
        width={32}
        height={32}
        alt=""
      />
    </figure>
  );
};

export default Avatars;
