import { IconType } from 'react-icons/lib/esm/iconBase'
import { useNavigate } from 'react-router-dom'
type OurProgramProps = {
  Icon: IconType
  title: string
  description: string
}

const OurProgram = ({ Icon, title, description }: OurProgramProps) => {
  const navigate = useNavigate()
  return (
    <div className="">
      <article
        onClick={() => navigate(`/${title.split(" ").join('-')}`)}
        className="our-program cursor-pointer md:w-[360px] h-[400px] max-md:w-full text-center shadow-[0px_5px_90px_0px_rgb(110_123_131_/_10%)] transition-all duration-[ease-in-out] delay-[0.3s] px-5 py-20"
      >
        <aside className="service-icon">
          <Icon />
        </aside>
        <h5 className="text-[24px] font-bold">{title}</h5>
        <p className="text-[14px] leading-[24px]">{description}</p>
      </article>
    </div>
  )
}

export default OurProgram
