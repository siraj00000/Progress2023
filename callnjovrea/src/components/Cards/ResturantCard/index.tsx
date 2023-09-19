import React from "react";

interface ResturantCardProps {
  backgroundURL: string;
  title: string;
  location: string;
}

const ResturantCard: React.FC<ResturantCardProps> = ({
  backgroundURL,
  title,
  location,
}) => {
  return (
    <article className="relative w-[390px] h-[390px]">
      <img
        src={backgroundURL}
        alt=""
        className="absolute inset-0"
        loading="lazy"
      />
      <div className="card-gradient-bg absolute inset-5 w-[348px] h-[349px] flex items-end justify-end">
        <div className="text-right p-5">
          <h1 className="text-white uppercase text-24 leading-32 font-bold">
            {title}
          </h1>
          <p className="font-normal text-18 leading-21 text-white">
            {location}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ResturantCard;
