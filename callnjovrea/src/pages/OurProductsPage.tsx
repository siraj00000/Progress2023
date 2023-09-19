import { RiFilter2Line } from "react-icons/ri";
import { ProductListType, ProductsList } from "../data/productsList";
import { ProductCard } from "../components";
const OurProducts = () => {
  return (
    <div className="p-8per">
      <section>
        <h1 className="text-center text-white md:text-46 text-26 leading-53 uppercase mb-2">
          Our Product
        </h1>
        <p className="text-center text-white md:text-18 text-13 md:leading-36 leading-21 md:w-1/2 mx-auto">
          Discover an exquisite selection of fish products from our Finest Catch
          Collection. Each product has been carefully sourced from the freshes
        </p>

        <aside className="text-white md:text-24 text-14 leading-32 rounded-lg bg-tertiary flex items-center justify-between md:p-5 p-2 md:mt-16 mt-8">
          <h5 className="uppercase">Our Top prodcuts</h5>
          <h5 className="flex items-center md:gap-2 gap-1 md:text-20 text-13">
            <span>
              <RiFilter2Line />
            </span>
            Filters
          </h5>
        </aside>
      </section>

      {/* Product List */}
      <section className="grid md:grid-cols-3 grid-cols-1 md:gap-y-20 gap-y-16 md:gap-10 py-20">
        {ProductsList.map((item: ProductListType, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </section>

      <section className="md:mt-16">
        <h1 className="text-center text-white md:text-46 text-26 leading-53 uppercase mb-2">
          Discount products
        </h1>
        <p className="text-center text-white md:text-18 text-13 md:leading-36 leading-21 md:w-1/2 mx-auto">
          Discover an exquisite selection of fish products from our Finest Catch
          Collection. Each product has been carefully sourced from the freshes
        </p>
      </section>

      {/* Discount Product List */}
      <section className="grid md:grid-cols-3 grid-cols-1 md:gap-y-20 gap-y-16 md:gap-10 py-20">
        {ProductsList.map((item: ProductListType, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </section>

      <section className="flex items-center justify-center gap-10 max-md:flex-col">
        <img
          src={require("../assets/png/fish-sale-banner.png")}
          alt="fish-sale-banner"
        />
        <img
          src={require("../assets/png/fish-sale-banner.png")}
          alt="fish-sale-banner"
        />
      </section>
    </div>
  );
};

export default OurProducts;
