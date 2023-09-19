import BlogPost from '../../components/blogPost'
import { useState, useEffect } from 'react'
import { handleInsertAction } from '../../utils/api'
import { ApiResponse } from '../../types/response.types'
import { Splash } from '../../components'
import { useParams } from 'react-router-dom'

type Props = {}

type BlogPostType = {
  _id: string
  title: string
  blogPara: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  __v: number
}

const Blog = (props: Props) => {
  const { id } = useParams()
  const [blogList, setBlogList] = useState<Array<any> | null>(null)
  const [singleBlogPost, setSingleBlogPost] = useState<BlogPostType | null>(
    null,
  )

  useEffect(() => {
    let isMounted = true
    const fetchBlogs = async () => {
      try {
        const response = (await handleInsertAction({
          url: `/api/blog-post/${id}`,
        })) as ApiResponse

        if (isMounted && response.data.success) {
          setBlogList(response.data.data.blogs)
          setSingleBlogPost(response.data.data.singleBlogPost)
        }
      } catch (error) {
        setBlogList([])
      }
    }

    fetchBlogs()

    return () => {
      isMounted = false
    }
  }, [id])

  if (!blogList) return <Splash />
  return (
    <main>
      <section className="w-full flex flex-col items-center p-10 pt-56">
        <h1 className="font-bold text-black text-[90px] leading-[95px] mb-10">
          {singleBlogPost?.title}
        </h1>
        <img src={singleBlogPost?.imageUrl} alt="hero-section-blogbg" />
        <div className="w-full">
          <p className="text-black opacity-[0.7] text-[16px] leading-[28px] w-2/3 mx-auto tracking-[.5]">
            {singleBlogPost?.blogPara}
          </p>
        </div>
      </section>
      {/* Hero section */}
      <section className="h-auto w-full relative">
        <img src={singleBlogPost?.imageUrl} alt="hero-section-blogbg" />
        <div className="h-full w-full flex justify-between">
          <div className="w-1/2"></div>
          <div className="w-1/2 h-full flex flex-col justify-center gap-5 px-[2%]">
            <h1 className="font-bold text-black text-[90px] leading-[95px]">
              {singleBlogPost?.title}
            </h1>

            <p className="text-black opacity-[0.7] text-[16px] leading-[28px] w-2/3 tracking-[.5]">
              {singleBlogPost?.blogPara}
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog section */}
      <section className="bg-light py-[6%]">
        <h5 className="font-bold text-dark text-[24px] leading-[32px] pl-[8%] mb-5">
          Latest
        </h5>
        <div className="flex flex-wrap items-center justify-center gap-[37px]">
          {blogList.map((item: any, index) => (
            <BlogPost key={index} {...item} contrast="dark" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blog
