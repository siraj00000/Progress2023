import React from 'react'
import { CarouselList } from '../../constants'
import { Carousel } from 'flowbite-react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="h-[700px] 2xl:h-[1024px] bg-blend-multiply relative -top-1 carousel">
      <Carousel slide={false}>
        {CarouselList.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.BackgroundImage}
                alt="..."
                className="h-[1000px] md:h-full w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full mix-blend-normal flex flex-col justify-center gap-y-2 px-[8%] bg-black bg-opacity-[0.47]">
                <h5 className="text-light text-[50px] leading-[75px] font-bold">
                  {item.title}
                </h5>
                <p className="sm:w-full md:w-1/2  text-[23px] leading-[34px] text-light font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Slider
