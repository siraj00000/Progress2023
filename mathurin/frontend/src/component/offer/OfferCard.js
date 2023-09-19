import React from 'react';

import Coupon from '@component/coupon/Coupon';
import useTranslation from "next-translate/useTranslation";
const OfferCard = () => {
  const {t}=useTranslation()
  return (
    <div className="w-full group">
      <div className="bg-gray-50 h-full border-2 border-blue-400 transition duration-150 ease-linear transform group-hover:border-blue-700 rounded shadow-lg">
        <div className="bg-blue-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
          <h3 className="text-base font-serif font-medium ">
            {t("common:OfferCard-Title")}
          </h3>
        </div>
        <div className="overflow-hidden">
          <Coupon couponInHome />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
