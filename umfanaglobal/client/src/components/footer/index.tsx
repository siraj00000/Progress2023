import { BiCopyright } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-[2%] bg-black">
      <h4 className="text-[30px] leading-[45px] text-white text-center font-bold mb-2">
        Umfana
      </h4>
      <div className="flex item-center justify-center px-[5%]">
        <section className="flex-1">
          <form className="flex flex-col items-center gap-5 text-white">
            <label className="text-[20px] leading-[30px] font-bold">
              Subscribe to our newsletter :
            </label>
            <input
              type="text"
              placeholder="Enter your email address here"
              className="w-full bg-transparent border-dark border-[1px] placeholder:text-white text-[20px] leading-[30px] font-light "
            />
            <button className="bg-dark text-white text-[18px] leading-[45px] w-max px-5 rounded-full">
              Subscribe
            </button>
          </form>
        </section>
        <section className="flex-[2] text-white text-center flex flex-col justify-between gap-5">
          <p className="ext-[20px] leading-[30px] text-white w-2/4 mx-auto">
            Invest in your today for a more secure and sure tomorrow
          </p>
          <div className="">
            <h6>
             <span className='font-bold'>Phone :</span> <span>+254789760085</span> <span>+254789760085</span>
            </h6>
            <h6>
              <span className='font-bold'>Email :</span> <span>umfanainitiative@gmail.com</span>
            </h6>
          </div>
          <div className="flex items-center justify-center gap-1 mt-5">
            <BiCopyright />
            <h6>
               Copyright <span className='text-dark font-bold cursor-pointer'>Umfana</span>. All Rights Reserved.
            </h6>
          </div>
        </section>
        <section className="flex-1 relative">
          <div className="text-white cursor-pointer flex items-center gap-2 absolute bottom-5 right-0">
            <FaFacebookF size={21} className='hover:text-dark' />
            <AiOutlineTwitter size={21} className='hover:text-dark' />
            <BsInstagram size={21} className='hover:text-dark' />
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
