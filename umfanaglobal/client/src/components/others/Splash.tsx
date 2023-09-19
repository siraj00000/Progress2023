import React from 'react'
import { Logo } from '../../assets';

type Props = {}

const Splash = (props: Props) => {
  return (
    <main className='bg-light w-full h-screen flex flex-col items-center justify-center animate-pulse'>
      <img src={Logo} alt="splash" />
      <h6 className='font-semibold text-sm text-black relative -mt-5'>Loading...</h6>
    </main>
  )
}

export default Splash