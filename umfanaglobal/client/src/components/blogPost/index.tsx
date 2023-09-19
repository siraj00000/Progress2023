/**
 * Renders a single blog post with image, timestamp, and title.
 *
 * @param {string} title - The title of the blog post
 * @param {string} image - The URL of the image to be displayed in the blog post
 * @param {number} timestamp - The Unix timestamp representing the date the blog post was published
 *
 */

import { useNavigate } from 'react-router-dom'
import { Line } from '../../assets'

export type BlogPostType = {
  _id: string
  imageUrl: string
  timestamp: string
  title: string
  contrast?: string
}

const BlogPost = (props: BlogPostType) => {
  const navigate = useNavigate()

  const navigateToBlogPage = () => {
    navigate(`/blog/${props._id}`)
  }

  return (
    <article
      className="md:w-[360px] max-md:w-full text-left cursor-pointer"
      onClick={navigateToBlogPage}
    >
      {/* Blog Image */}
      <img
        src={props.imageUrl}
        alt="blog_post"
        className="w-full h-[240px] object-cover bg-light"
      />
      {/* Blog Timestamp */}
      <aside className="flex items-center gap-1 w-full my-5">
        <h5
          className={`font-medium text-[13px] leading-[12px] tracking-[1px] text-${[
            props.contrast,
          ]}`}
        >
          Blog
        </h5>
        <Line />
        <h5 className="font-medium text-black text-[13px] leading-[12px] tracking-[.5px] opacity-[.3]">
          5 mins read
        </h5>
      </aside>
      {/* Blog Title */}
      <h4 className="text-black text-[20px] leading-[30px] text-clip overflow-hidden">
        {props.title.substring(0, 50)}...
      </h4>
    </article>
  )
}

export default BlogPost
