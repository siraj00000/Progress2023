import { BsFillCircleFill } from "react-icons/bs";
import { Bachwa } from "../assets";
import { InfoTabs, ProductCard, StarRating } from "../components";
import { ProductListType, ProductsList } from "../data/productsList";

const ProductDetails = () => (
  <div className="absolute top-0 w-full">
    <img
      src={Bachwa}
      alt=""
      loading="lazy"
      className="z-20 relative inset-0 left-5 max-md:w-full"
    />

    <div className="absolute left-[25%] z-0 bg-secondary bg-opacity-20 rounded-md text-white w-max py-5 px-10">
      <div className="relative top-0">
        <h5 className="lg:text-34 text-18 lg:leading-40 leading-28">
          Nutrition
        </h5>
        <div className="absolute flex items-end -top-40 -left-5 bg-white">
          <div className="h-44 border-l-2 border-0 z-0 bg-white"></div>
          <BsFillCircleFill className="absolute -bottom-2 -left-1" size={10} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 lg:pt-5 pt-2 mt-8per">
        <li className="white-bullet text-white lg:text-18 text-13">
          Calories 158
        </li>
        <li className="white-bullet text-white lg:text-18 text-13">
          Protien: 22.5 grams
        </li>
        <li className="white-bullet text-white lg:text-18 text-13">
          Fat 7 grams
        </li>
        <li className="white-bullet text-white lg:text-18 text-13">
          Saturated fat:2 grams
        </li>
        <li className="white-bullet text-white text-18">Cholesterol: 73 mg</li>
      </ul>
    </div>

    <div className="absolute right-[10%] z-0 bg-secondary bg-opacity-20 rounded-md text-white w-max py-5 px-10">
      <div className="relative top-0">
        <h5 className="lg:text-34 text-18 lg:leading-40 leading-28">Profile</h5>
        <div className="absolute flex items-end -top-40 -left-5 bg-white">
          <div className="h-44 border-l-2 border-0 z-0 bg-white"></div>
          <BsFillCircleFill className="absolute -bottom-2 -left-1" size={10} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 lg:pt-5 pt-2 mt-8per">
        <li className="white-bullet text-white lg:text-18 text-13">
          Calories 158
        </li>
        <li className="white-bullet text-white lg:text-18 text-13">
          Protien: 22.5 grams
        </li>
        <li className="white-bullet text-white lg:text-18 text-13">
          Fat 7 grams
        </li>
      </ul>
    </div>
  </div>
);

const ProductDetailPage = () => {
  return (
    <div className="p-8per">
      {/* Breadcrumbs */}
      <section>
        <p className="text-white leading-18">
          Home / Fish / Bachwa fish Live Cut
        </p>
      </section>

      {/* Product detail section */}
      <section className="flex lg:items-center max-lg:flex-col md:justify-between">
        <aside>
          {/* product title */}
          <h5 className="text-white text-54 font-medium mb-5">
            Assorted Guppy Group, Female
          </h5>
          {/* Product Star Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={3} />
            <h5 className="text-26 leading-32 font-medium text-white">
              4.5 (23 Reviews)
            </h5>
          </div>
        </aside>
        <aside className="text-right mt-5">
          <h5 className="text-34 leading-40 font-bold text-white">
            ₹260.00{" "}
            <span className="text-26 leading-32 font-medium">/ per Kg</span>
          </h5>
          <button className="mt-5 w-48 bg-gradbg text-white text-18 leading-21 uppercase py-3 px-8 rounded">
            Add to cart
          </button>
        </aside>
      </section>

      {/* Product Image */}
      <section className="md:py-[10%]">
        <div className="relative w-full h-500">
          <h5 className="stroke-text text-135 leading-186 text-transparent opacity-20 uppercase relative top-10">
            Assorted Guppy
          </h5>
          <ProductDetails />
        </div>
      </section>

      {/* Product Information Tabs */}
      <section className="py-[10%]">
        <InfoTabs />
      </section>

      {/* Related Products */}
      <section className="text-center w-full">
        <h1 className="text-white md:text-46 text-26 leading-53 uppercase mb-2">
          Related products
        </h1>
        <p className="text-center text-white md:text-18 text-13 md:leading-36 leading-21 md:w-1/2 mx-auto">
          Discover an exquisite selection of fish products from our Finest Catch
          Collection.
        </p>

        {/* Product List */}
        <aside className="grid md:grid-cols-3 grid-cols-1 md:gap-y-20 gap-y-16 md:gap-10 py-20 text-left">
          {ProductsList.slice(0, 3).map((item: ProductListType, index) => (
            <ProductCard {...item} key={index} />
          ))}
        </aside>

        <button className="w-48 mx-auto bg-gradbg text-white text-18 leading-21 uppercase py-3 px-8 rounded">
          See More
        </button>
      </section>
    </div>
  );
};

export default ProductDetailPage;
