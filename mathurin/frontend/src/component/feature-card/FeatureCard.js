import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { featurePromo } from '@utils/data';

const FeatureCard = () => {
  const {t}=useTranslation()
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo) => (
        <div
          key={promo.id}
          className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white"
        >
          <div className="mr-3">
            <promo.icon
              className="flex-shrink-0 h-4 w-4 text-blue-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-sm font-medium leading-5">
              {t(`common:${promo.title}`)} {t(`common:${promo.info}`)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
