import LeftElement from './left_element'
import MiddleElement from './middle_element'
import RightElement from './right_element'

type Props = {}

const Testimonials = (props: Props) => {
  
  return (
    <section className="w-full flex items-center justify-around gap-10 pt-[5%] px-[5%]">
      <LeftElement />
      <MiddleElement />
      <RightElement />
    </section>
  )
}

export default Testimonials
