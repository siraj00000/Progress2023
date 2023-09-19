import { ProductCart } from "../components";
import Container from "../utils/styledComponent/Container";
import { MdDeleteOutline, MdInfoOutline } from "react-icons/md";

const SummaryComponent = () => (
  <div className="bg-secondary bg-opacity-20 p-5 rounded-md w-full">
    <div className="flex items-center justify-between">
      <h5 className="text-18 text-white">Subtotal</h5>
      <h5 className="text-20 text-white font-bold">₹260.00</h5>
    </div>
    <div className="flex items-center justify-between">
      <h5 className="text-18 text-white">Shipping</h5>
      <h5 className="text-20 text-white font-bold">₹30.00</h5>
    </div>

    <hr className="border-white mt-16 mb-3" />

    <div className="flex items-center justify-between">
      <h5 className="text-18 text-white">Total</h5>
      <h5 className="text-20 text-white font-bold">₹290.00</h5>
    </div>

    <h6 className="text-white text-right text-16 leading-18 my-2">₹50.00</h6>
    <p className="text-white text-right text-13 leading-13">
      Delivery charges will be included
    </p>

    <button className="bg-secondary bg-opacity-40 w-full py-3 mt-4 text-18 leading-20 text-white uppercase rounded-md">
      Order Now
    </button>

    <hr className="border-white mt-10 mb-3" />

    <div className="flex gap-5 text-white lg:w-4/5 my-1">
      <MdDeleteOutline size={60} />

      <div className="">
        <h6 className="text-18 text-white font-medium">Free Return Services</h6>
        <p className="text-white text-13 leading-13">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>

    <div className="flex gap-5 text-white w-4/5 my-1">
      <MdInfoOutline size={60} />

      <div className="">
        <h6 className="text-18 text-white font-medium">Zero shipping Free</h6>
        <p className="text-white text-13 leading-13">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  </div>
);

const CartPage = () => {
  return (
    <Container>
      <aside className="grid grid-cols-3 max-md:grid-cols-1 md:mx-0 mx-5">
        <section className="col-span-2">
          <h1 className="text-36 leading-86 text-white font-medium">
            Shopping bag
          </h1>

          <div className="flex items-center gap-10">
            <h6 className="text-14 text-white leading-18">
              Shipping 4 items from England
            </h6>
            <h6 className="text-14 text-white leading-18">
              Shipping cost: $12
            </h6>
          </div>

          <div className="">
            {[...Array(5)].map((_, index) => (
              <ProductCart key={index} />
            ))}
          </div>
        </section>
        <section className="col-span-1">
          <h1 className="text-36 leading-86 text-white font-medium">Summary</h1>
          <SummaryComponent />
        </section>
      </aside>
      <aside className="py-8per">
        <section className="text-white bg-secondary bg-opacity-20 p-10 rounded-md">
          <h3 className="text-28 leading-32 font-medium">Delivery Policy</h3>
          <p className="text-16 leading-24 mt-2">
            Similar to other Fancy Guppies, the Assorted Female Guppy does best
            in an established aquarium of at least 10 gallons. Though tolerant
            of small changes, care should be taken to maintain stable water
            parameters. Hardy plant varieties such as Java Fern and Java Moss
            are excellent choices for creating a lush, planted aquarium housing
            the Assorted Female Guppy. Though best displayed in a biotope or
            colony aquarium, the Assorted Female Guppy is a very peaceful fish
            that does well in freshwater community aquariums housing tankmates
            of similar temperament. <br /> <br /> The Assorted Female Guppy is
            an omnivore and requires both algae-based foods as well as meaty
            foods. An algae-based flake food, along with freeze-dried
            bloodworms, tubifex, and brine shrimp will provide guppies with the
            proper nutrition. Approximate Purchase Size: 3/4" to 1"
          </p>
          <h3 className="text-28 leading-32 font-medium mt-20 mb-2">
            Terms and Condition
          </h3>
          <p className="text-16 leading-24 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. <br /> <br /> Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </aside>
    </Container>
  );
};

export default CartPage;
