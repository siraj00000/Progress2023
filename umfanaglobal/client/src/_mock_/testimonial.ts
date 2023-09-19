import { Avatar } from "../assets";

export type TestinomialContentType = {
  avatar: string;
  name: string;
  designation: string;
  comment: string;
};

export const TestinomialContent: TestinomialContentType[] = [
  {
    avatar: Avatar,
    name: "Jane Doe",
    designation: "Lead designer",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim`,
  },
  {
    avatar: Avatar,
    name: "Nixon Chege",
    designation: "CEO",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim`,
  },
  {
    avatar: Avatar,
    name: "Jane Doe",
    designation: "Lead designer",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim`,
  },
];
