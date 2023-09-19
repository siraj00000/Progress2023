import Discount from "@component/common/Discount";
import Price from "@component/common/Price";
import Stock from "@component/common/Stock";
import ProductModal from "@component/modal/ProductModal";
import useAddToCart from "@hooks/useAddToCart";
import useAsync from "@hooks/useAsync";
import SettingServices from "@services/SettingServices";
import { notifyError } from "@utils/toast";
import { showingTranslateValue } from "@utils/translate";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";
import { useCart } from "react-use-cart";

const ProductCard = ({ product, attributes }) => {
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { lang } = useTranslation("ns1"); // default namespace (optional)
  const [modalOpen, setModalOpen] = useState(false);

  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  const currency = globalSetting?.default_currency || "$";

  // console.log('attributes in product cart',attributes)

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const newItem = {
      ...p,
      title: showingTranslateValue(p?.title, lang),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
  };

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div className="group box-border overflow-hidden flex rounded-md shadow-lg pe-0 flex-col items-center bg-white relative">
        <div
          onClick={() => handleModalOpen(!modalOpen, product._id)}
          className="relative flex justify-center w-full cursor-pointer pt-4"
        >
          <div className="left-2">
            <Stock product={product} stock={product.stock} card />
          </div>

          <Discount product={product} />

          {product?.image[0] ? (
            <Image
              src={product.image[0]}
              width={210}
              height={210}
              alt="product"
              className="object-contain  transition duration-150 ease-linear transform group-hover:scale-105"
            />
          ) : (
            <Image
              src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
              width={210}
              height={210}
              alt="product"
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
            />
          )}
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">
                {showingTranslateValue(product?.title, lang)}
              </span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading space-s-2">
            <Price
              card
              product={product}
              currency={currency}
              price={product.prices.price}
              originalPrice={product?.prices?.originalPrice}
            />

            <button
              aria-label="cart"
              className="h-7 w-7 sm:h-9 sm:w-9 lg:h-9 lg:w-9 xl:h-9 xl:w-9 flex items-center justify-center border border-gray-200 rounded-full text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all"
            >
              {" "}
              <span className="text-xl">
                <FiHeart />
              </span>{" "}
            </button>

            <button
              aria-label="cart"
              className="h-7 w-7 sm:h-9 sm:w-9 lg:h-9 lg:w-9 xl:h-9 xl:w-9 hidden md:hidden lg:block border border-gray-200 rounded-full text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all"
            >
              {" "}
              <span className="text-xl flex justify-center">
                <BiGitCompare />
              </span>{" "}
            </button>

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-7 sm:h-9 lg:h-9 xl:h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-blue-500 text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="cart"
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-9 lg:w-9 xl:h-9 xl:w-9 flex items-center justify-center border border-gray-200 rounded-full text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all"
              >
                {" "}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
