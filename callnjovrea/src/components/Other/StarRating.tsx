import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2 text-34 text-white">
      {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          {index <= rating ? <AiFillStar /> : <AiOutlineStar />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StarRating;
