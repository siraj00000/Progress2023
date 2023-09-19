import { QuoteIconLeft, QuoteRightIcon } from "../../../../assets";
import { TestimonialListTypes } from "../../../../data/testimonial";

const Testinmonials: React.FC<TestimonialListTypes> = ({
  profileURL,
  title,
  remarks,
}) => {
  return (
    <article className="bg-tertiary text-center rounded-md max-w-xl w-full text-white pb-5 ">
      <img
        className="inline-block h-90 w-90 rounded-full relative -top-12 z-50"
        src={profileURL}
        alt="client-profile-url"
        loading="lazy"
      />
      <h4 className="text-18 leading-21 font-medium relative -top-5">
        {title}
      </h4>
      <div className="flex text-left items-start p-3 relative -top-2">
        <p className="pl-12 pr-5 relative">
          <img
            src={QuoteIconLeft}
            alt="quotation-icon"
            className="absolute top-0 left-0"
            loading="lazy"
          />
          {remarks}
          <img
            src={QuoteRightIcon}
            alt="quotation-icon"
            className="absolute bottom-0 right-0"
            loading="lazy"
          />
        </p>
      </div>
    </article>
  );
};

export default Testinmonials;
