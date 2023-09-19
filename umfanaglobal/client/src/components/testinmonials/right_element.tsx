import { RiDoubleQuotesL } from 'react-icons/ri';
import { Avatar, RightBgBlack, RightBgLight } from '../../assets'

type Props = {}

const RightElement = (props: Props) => {
  return (
    <div className="relative h-[342px] w-[302px]">
      <img src={RightBgBlack} alt="left-bg" />
      <img
        src={RightBgLight}
        alt="right-bg"
        className="absolute -top-5 right-5"
      />
      <div className="absolute -top-5 right-5 w-full h-full flex flex-col items-center px-5">
        <img
          className="w-16 h-16 rounded-full text-center"
          src={Avatar}
          alt="Rounded avatar"
        />
        <h5 className="text-[18px] leading-[27px] text-[#525252] font-extrabold">
          Jane Doe
        </h5>
        <h6 className="text-[12px] leading-[14px] text-[#525252]">
          Lead designer
        </h6>

        <RiDoubleQuotesL size={20} className="text-dark" />
        <p className="text-[15px] leading-[20px] text-[#525252] text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim{' '}
        </p>
      </div>
    </div>
  )
}

export default RightElement
