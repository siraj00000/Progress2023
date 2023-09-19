/**
 * HomePage
 *
 * Renders the homepage based on the design from the Figma link.
 *
 * @see https://www.figma.com/file/iapMYg07GjbQCjkpZIjTGi/Umfana-Global-Design-(Copy)?node-id=20%3A100&t=CnI9uMy4dKgWPDp0-0
 *
 * Props:
 * None
 *
 * Example usage:
 * <HomePage />
 */

import { Slider, Splash } from '../../components'
import {
  StorySnaps1,
  StorySnaps2,
  StorySnaps3,
  StorySnaps4,
  StorySnaps5,
  StorySnaps6,
  StorySnaps7,
  StorySnaps8,
  BorderBottom,
  BorderTop,
} from '../../assets'
import BlogPost from '../../components/blogPost'
import OurProgram from '../../components/ourProgram'
import { MdLightbulbOutline } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import TestimonialSlider from '../../components/others/testimonial_slider'
import { useEffect, useState } from 'react'
import { handleFetchAction } from '../../utils/api'
import { ApiResponse } from '../../types/response.types'

const Home = () => {
  const [blogList, setBlogList] = useState<Array<any> | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchBlogs = async () => {
      try {
        const response = (await handleFetchAction({
          url: '/api/blog-post',
        })) as ApiResponse

        if (isMounted && response.data.success) {
          setBlogList(response.data.data)
        }
      } catch (error) {
        setBlogList([])
      }
    }

    fetchBlogs()
    return () => {
      isMounted = false
    }
  }, [])

  if (!blogList) return <Splash />
  return (
    <div className="text-2xl">
      {/*
       * Slider section of the HomePage component.
       *
       * Props:
       * None
       *
       * Example usage:
       * <Slider />
       */}
      <Slider />

      {/**
       * Our Story section of the HomePage component.
       *
       * This section displays a description about the organization, as well as snaps from the assets folder and a read more button.
       *
       * Example usage:
       * <OurStory />
       */}
      <section id="story" className="pt-10 px-[5%]">
        <div className="flex items-center gap-10 mb-5">
          <h1 className="text-dark text-[40px] leading-[60px] font-semibold uppercase">
            Our Story
          </h1>
          <div className="w-1/2 bg-[rgba(73, 70, 70, 0.6)] border-b-2"></div>
        </div>

        <div className="flex max-md:flex-col-reverse   justify-between pl-5">
          <div className="flex-1 pr-[5%]">
            <h5 className="text-[30px] leading-[45px] text-black font-semibold">
              WHO WE ARE:
            </h5>
            <p className="text-[22px] leading-[45px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              finibus odio quis feugiat tempus. Curabitur eget turpis ac tortor
              pulvinar semper ac vel ex. Aenean convallis elementum nulla, at
              aliquet nibh fringilla efficitur. Quisque suscipit ex at massa
              sodales elementum. In turpis ipsum, rhoncus vitae enim eu, laoreet
              faucibus purus. Proin sollicitudin faucibus mauris vitae
              porttitor. Pellentesque eu est massa. Donec sit amet orci sit amet
              ipsum sollicitudin gravida. Nam in nibh ipsum. Morbi nibh risus,
              pulvinar non congue non, congue luctus lacus.
            </p>
            <button className="bg-black text-light w-[164px] h-[52px] rounded-full mt-10">
              Read more
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-rows-3 grid-flow-col">
              {/* r1 c1 */}
              <div className="flex items-start justify-end">
                <img
                  src={StorySnaps1}
                  alt="StorySnaps1"
                  className="relative -right-8"
                />
              </div>
              {/* r2 c1 */}
              <div className="col-span-2 flex items-start justify-end relative -top-[30%]">
                <img
                  src={StorySnaps4}
                  alt="StorySnaps4"
                  className="resize object-contain"
                />
              </div>
              {/* r3 c1 */}
              <div className="relative -top-[30%] -left-2">
                <img
                  src={StorySnaps6}
                  alt="StorySnaps6"
                  className="resize object-contain"
                />
              </div>

              {/* r1 c2 */}
              <div className="flex items-start justify-end mt-[18%]">
                <img
                  src={StorySnaps2}
                  alt="StorySnaps2"
                  className="resize object-contain"
                />
              </div>

              {/* r3 c2 */}
              <div className="relative -top-[40%]">
                <img
                  src={StorySnaps7}
                  alt="StorySnaps7"
                  className="resize object-contain"
                />
              </div>

              {/* r1 c3 */}
              <div className="">
                <img
                  src={StorySnaps3}
                  alt="StorySnaps3"
                  className="resize object-contain"
                />
              </div>
              {/* r2 c3 */}
              <div className="relative top-[20%]">
                <img
                  src={StorySnaps5}
                  alt="StorySnaps5"
                  className="resize object-contain"
                />
              </div>
              {/* r3 c3 */}
              <div className="flex items-start justify-end relative -top-12">
                <img
                  src={StorySnaps8}
                  alt="StorySnaps8"
                  className="resize object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**
       * Latest Blog Posts section of the HomePage component.
       *
       * This section displays the title "Our Latest Blog Posts" as an `h1` heading, a horizontal list of `BlogPost` components, and a read more button.
       *
       * Example usage:
       * <section>
       *   <h1>Latest Blog Posts</h1>
       *   <div className="blog-post-list">
       *     <BlogPost title="Blog Post 1" timestamp="2022-01-01" image="blog-post-1.jpg" />
       *     <BlogPost title="Blog Post 2" timestamp="2022-02-01" image="blog-post-2.jpg" />
       *     <BlogPost title="Blog Post 3" timestamp="2022-03-01" image="blog-post-3.jpg" />
       *   </div>
       *   <button>Read More</button>
       * </section>
       */}
      <section className="relative">
        <img
          src={BorderTop}
          alt="BorderBottom"
          className="relative -bottom-1"
        />
        <div className="h-[191px] absolute max-md:relative max-md:bg-dark top-0 w-full text-center flex flex-col items-center justify-end">
          <h1 className="font-semibold text-[30px] leading-[32px] text-light min-md:ml-16">
            Our latest blog posts
          </h1>
          <p className="font-normal text-[20px] leading-[45px] text-light mt-5 tracking-wide min-md:ml-16">
            Take a look at some of the content offered on our blog!
          </p>
        </div>
        <div className="w-full bg-dark text-center z-10">
          <div className="flex flex-wrap items-center justify-center gap-[57px] p-[5%]">
            {blogList?.map((item: any, index) => (
              <BlogPost key={index} {...item} contrast="light" />
            ))}
          </div>
        </div>
        <div>
          <img
            src={BorderBottom}
            alt="BorderBottom"
            className="relative -top-1 object-cover"
          />
        </div>
      </section>

      {/**
       * Our Program section of the HomePage component.
       *
       * This section displays a organization's programs, program will be shown as an component.
       *
       * Example usage:
       * <section>
       *   <h1>Our Program</h1>
       *   <div>
       *     <OurPrograms />
       *   </div>
       * </section>
       */}
      <div id="program"></div>
      <section id="program" className="px-[5%] relative pb-[5%]">
        <div className="flex items-center gap-10 mb-5 relative md:-top-10 max-md:-top-0 w-full">
          <h1 className="text-dark text-[40px] leading-[60px] font-semibold uppercase">
            Our Program
          </h1>
          <div className="w-[10%] bg-[rgba(73, 70, 70, 0.6)] border-b-2"></div>
        </div>
        <div className="flex justify-center items-start gap-8">
          <OurProgram
            Icon={AiOutlineInfoCircle}
            title="Conferences and Seminars"
            description="We regularly organize conferences throughout the year with our main event happening during the summer break."
          />
          <OurProgram
            Icon={MdLightbulbOutline}
            title="Mentorship Sessions"
            description="Umfana Mentorship Sessions are conducted throughout the year. We create custom mentorship plans for each of our participants to suit their needs and goals."
          />
          <OurProgram
            Icon={BiBookBookmark}
            title="University Preparation and Application Guidance"
            description="We offer preparation and application guidance to students either hoping to or applying to universities abroad. We take them through all the important stages of the application process all through submitting their application."
          />
        </div>
      </section>

      {/**
       * A carousel of testimonials.
       *
       * @component
       * @param {Object[]} testimonials - An array of testimonial objects.
       * @param {string} testimonials[].name - The name of the person who provided the testimonial.
       * @param {string} testimonials[].text - The text of the testimonial.
       * @param {string} testimonials[].avatarUrl - The URL of the avatar image for the person who provided the testimonial.
       */}
      <section className="relative">
        <div className="bg-dark flex items-center gap-10 w-full p-[5%] z-0">
          <h1 className="text-light text-[40px] leading-[60px] font-semibold uppercase">
            TESTIMONIALS
          </h1>
          <div className="w-1/2 bg-[rgba(73, 70, 70, 0.6)] border-b-2"></div>
        </div>
        <div className="bg-dark">
          <TestimonialSlider />
        </div>
        <div>
          <img
            src={BorderBottom}
            alt="BorderBottom"
            className="relative -top-1 object-cover"
          />
        </div>
      </section>

      {/**
       * Our impact section
       * */}
      <section className="px-[5%] relative pb-[5%]">
        <div className="flex items-center gap-10 relative md:-top-20 max-md:-top-0 w-full">
          <h1 className="text-dark text-[40px] leading-[60px] font-semibold uppercase">
            Our Impact
          </h1>
          <div className="w-[10%] bg-[rgba(73, 70, 70, 0.6)] border-b-2"></div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="w-[208px] h-[151px] max-md:w-full text-center">
            <h1 className="text-[40px] font-bold text-black leading-[60px]">
              20,000
            </h1>
            <p className="text-[30px]  text-black leading-[30px]">
              Participants <br /> to date
            </p>
          </div>
          <div className="w-[208px] h-[151px] max-md:w-full text-center">
            <h1 className="text-[40px] font-bold text-black leading-[60px]">
              10+
            </h1>
            <p className="text-[30px]  text-black leading-[30px]">
              Countries <br />
              Involved
            </p>
          </div>
          <div className="w-[208px] h-[151px]vmax-md:w-full text-center">
            <h1 className="text-[40px] font-bold text-black leading-[60px]">
              20+
            </h1>
            <p className="text-[30px]  text-black leading-[30px]">
              Conferences <br />
              and <br /> Workshops
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
