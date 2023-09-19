import React from "react";
import QouteIcon from "@/public/QouteIcon.svg";
import CargoQoute from "@/public/CargoQoute.svg";
import Image from "next/image";
type QoutationProps = {
  qoutation: string;
};

const Quotation: React.FC<QoutationProps> = ({ qoutation }) => {
  return (
    <article className="bg-primary py-8per flex flex-col items-center justify-center gap-8">
      <Image
        src={QouteIcon}
        className="w-auto h-auto rounded-full md:object-contain object-cover"
        alt="QouteIcon"
      />
      <p className="text-light italic font-sharpsans500 lg:text-40 md:text-32 text-24 w-4/5 mx-auto text-center">
        {qoutation}
      </p>
      <Image
        src={CargoQoute}
        className="w-auto h-auto object-contain"
        alt="CargoQoute"
      />
    </article>
  );
};

export default Quotation;
