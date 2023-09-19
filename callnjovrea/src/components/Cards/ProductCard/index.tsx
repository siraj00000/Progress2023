import { ProductListType } from "../../../data/productsList";

const ProductCard: React.FC<ProductListType> = ({
  product_image,
  product_title,
  product_description,
  product_price,
  product_weight,
}) => {
  return (
    <article className="flex flex-col gap-3 items-start">
      <img src={product_image} alt="products_assets" />
      <h1 className="text-28 leading-32 font-bold text-white my-3">{product_title}</h1>
      <p className="text-18 leading-26 w-300 text-white my-2">{product_description}</p>

      <h6 className="text-34 leading-40 text-white font-bold">
        {product_price} / <span className="text-26 leading-32">{product_weight}</span>
      </h6>
    </article>
  );
};

export default ProductCard;
