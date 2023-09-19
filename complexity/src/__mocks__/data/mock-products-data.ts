import { Walkie3 } from "../../assets";

export interface Product {
  id: number;
  image: Array<string>;
  title: string;
  description: string;
  rating: number;
  price: number;
  brand: string;
  color: string;
  condition: string;
  category: string;
  sub_category: string;
}

const mockProductData: Product[] = [
  {
    id: 0,
    image: [Walkie3, Walkie3, Walkie3],
    title: "4-pack Retevis RT21 Walkie Talkie",
    description: `Case of 4,Retevis RT21 Walkie Talkies Adults Rechargeable, Two Way Radios Long Range,16 Channels VOX Hands Free Emergency 2-Way Radio for Family and Small Organization Business`,
    rating: 4.5,
    price: 100,
    brand: "Retevis",
    color: "black",
    condition: "new",
    category: "Electronics",
    sub_category: "Audio",
  },
  {
    id: 1,
    image: ["https://via.placeholder.com/150"],
    title: "Product 2",
    description: `Case of 4,Retevis RT21 Walkie Talkies Adults Rechargeable, Two Way Radios Long Range,16 Channels VOX Hands Free Emergency 2-Way Radio for Family and Small Organization Business`,
    rating: 3.5,
    price: 50,
    brand: "Retevis",
    color: "black",
    condition: "new",
    category: "Electronics",
    sub_category: "Audio",
  },
  {
    id: 2,
    image: ["https://via.placeholder.com/150"],
    title: "Product 3",
    description: `Case of 4,Retevis RT21 Walkie Talkies Adults Rechargeable, Two Way Radios Long Range,16 Channels VOX Hands Free Emergency 2-Way Radio for Family and Small Organization Business`,
    rating: 5,
    price: 200,
    brand: "Retevis",
    color: "black",
    condition: "new",
    category: "Electronics",
    sub_category: "Audio",
  },
];

export default mockProductData;
