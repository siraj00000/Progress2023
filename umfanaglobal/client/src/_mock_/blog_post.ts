import { BlogPost1 } from "../assets";

export type BlogPostType = {
  blogImage: string;
  timestamp: string;
  title: string;
  contrast?: string
};

export const BlogPostListType: BlogPostType[] = [
  {
    blogImage: BlogPost1,
    title:
      "Useful tips for writing college essays, Useful tips for writing college essays. Useful tips for writing college essays",
    timestamp: "5 mins read",
  },
  {
    blogImage: BlogPost1,
    title: "Steps to fully embracing academic discipline",
    timestamp: "5 mins read",
  },
  {
    blogImage: BlogPost1,
    title: "The beauty of writing down goals and achievements",
    timestamp: "5 mins read",
  },
];
