import React from 'react'
import { TestinomialContent } from '../../_mock_/testimonial'
import { Carousel } from 'flowbite-react'
import LeftElement from '../testinmonials/left_element'
import MiddleElement from '../testinmonials/middle_element'
import RightElement from '../testinmonials/right_element'
import Testimonials from '../testinmonials'

type Props = {}

const TestimonialSlider = (props: Props) => {
  return (
    <div className="h-full w-full testinmonial-carousel">
      <Carousel slide={false}>
        {TestinomialContent.map((item, index) => {
          return <Testimonials key={index} />
        })}
      </Carousel>
    </div>
  )
}

export default TestimonialSlider
