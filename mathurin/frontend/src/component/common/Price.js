const Price = ({ product, price, card, currency, originalPrice }) => {
  // console.log("price", price, "originalPrice", originalPrice, "card", card);
  return (
    <div className="font-serif product-price font-bold">
      {product?.variants.length > 0 ? (
        <>
          <span
            className={
              card
                ? "inline-block text-md font-semibold text-gray-800"
                : "inline-block text-xl"
            }
          >
            {currency}
            {price}
          </span>
          {originalPrice > price && !card ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400 ml-1"
                    : "text-md font-normal text-gray-400 ml-1"
                }
              >
                {currency}
                {parseFloat(originalPrice).toFixed(2)}
              </del>
            </>
          ) : null}
        </>
      ) : (
        <>
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-xl"
            }
          >
            {currency}
            {product?.prices?.price}
          </span>
          {originalPrice > price && card ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400 ml-1"
                    : "text-md font-normal text-gray-400 ml-1"
                }
              >
                {currency}
                {parseFloat(originalPrice).toFixed(2)}
              </del>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Price;
