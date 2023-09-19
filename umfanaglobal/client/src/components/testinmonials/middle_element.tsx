import { RiDoubleQuotesL } from 'react-icons/ri'
import { Avatar, MidBgBlack, MidBgLight } from '../../assets'

type Props = {}

const MiddleElement = (props: Props) => {
  return (
    <div className="relative w-[415px] h-[433px]">
      <img src={MidBgBlack} alt="mid-black" className="relative left-16" />
      <img
        src={MidBgLight}
        alt="mid-light"
        className="absolute top-0 w-full h-full"
      />
      <div className="absolute -top-9 w-full h-full flex flex-col gap-2 items-center px-5 z-50">
        <img
          className="w-24 h-24 rounded-full text-center"
          src={Avatar}
          alt="Rounded avatar"
        />
        <h5 className="text-[18px] leading-[27px] text-[#525252] font-extrabold">
          Nixon Chege
        </h5>
        <h6 className="text-[12px] leading-[14px] text-[#525252]">
          CEO
        </h6>
        <RiDoubleQuotesL size={25} className='text-dark' />
        <p className="text-[17px] leading-[26px] text-[#525252] text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim
        </p>
      </div>
    </div>
  )
}

export default MiddleElement
