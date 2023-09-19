import { ProductFish } from "../../../assets";
import { MdOutlineDelete } from "react-icons/md";
type Props = {};

const ProductCart = (props: Props) => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 gap-5 py-5 md:mx-0 mx-5">
      <img src={ProductFish} alt="" loading="lazy" className="col-span-1" />
      <div className="md:col-span-2 col-span-1 flex flex-col gap-2">
        <h5 className="text-28 leading-32 text-white font-medium uppercase">
          Assorted guppy group
        </h5>
        <ul>
          <li className="white-bullet text-14 text-white">weight: 2kg</li>
          <li className="white-bullet text-14 text-white">
            Max length: 38.2 cm
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="">
            <label className="block text-white text-14 leading-21 my-1">
              Quantity
            </label>
            <input
              defaultValue={2}
              type="number"
              className="border-white border px-3 w-20 h-10 outline-none rounded-md bg-transparent text-white"
            />
          </div>

          <div className="">
            <label className="block text-white text-14 leading-21 my-1">
              Size
            </label>
            <select className="border-white border h-10 px-2 outline-none rounded-md bg-transparent text-white">
              <option value="Size Medium">Size Medium</option>
              <option value="Size Large">Size Large</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-white relative top-4">
            <MdOutlineDelete size={20} />
            <span className="text-14 leading-21">Remove</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 col-span-1">
        <h6 className="text-34 leading-40 text-white font-bold">
          ₹260.00 <span className="text-20 leading-28">/ per Kg</span>
        </h6>
        <p className="text-white text-13 leading-13">
          cooling charges not included
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
