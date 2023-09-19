import { Button, Rating, Stack } from '@mui/material'
import { Walkie3 } from '../../assets'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import './deals.css'
type Props = {}

const MyDeal = (props: Props) => {
  return (
    <main className="deals-main">
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        width={'100%'}
      >
        <Button variant="contained">Mark Selected Deals as Complete</Button>
      </Stack>

      <aside className="-deals-wrapper">
        <section className="deal-product__info">
          <img src={Walkie3} alt="deal" />
          <div className="product__information">
            <p>
              Sony WH-XB910N EXTRA BASS Noise Cancelling Headphones, Wireless
              Bluetooth Over the Ear Headset with Microphone and Alexa Voice
              Control, Black
            </p>
            <div className="product__rating">
              <Rating name="read-only" size={'large'} value={5} readOnly />
            </div>
            <p className="product__price">
              <small>Buy Price $</small>
              <strong>{49.99}</strong>
            </p>
          </div>
        </section>
        <section className="directed-to-icon">
          <MdOutlineArrowRightAlt size={106} />
        </section>

        <section className="deal-buyer__address">
          <p>In-Person Delivery</p>
          <p>1200 B Gale Wilson Blvd Fairfield Ca 94533</p>
          <p>12/17/25</p>
          <input
            type="text"
            placeholder='Enter Tracking Number Here'
            className='product-tracking-number-input' />
        </section>

        <section className='deal-select__wrapper'>
          <input type="checkbox" name="" id="" />
        </section>
      </aside>

      <aside className="-deals-wrapper">
        <section className="deal-product__info">
          <img src={Walkie3} alt="deal" />
          <div className="product__information">
            <p>
              Sony WH-XB910N EXTRA BASS Noise Cancelling Headphones, Wireless
              Bluetooth Over the Ear Headset with Microphone and Alexa Voice
              Control, Black
            </p>
            <div className="product__rating">
              <Rating name="read-only" size={'large'} value={5} readOnly />
            </div>
            <p className="product__price">
              <small>Buy Price $</small>
              <strong>{49.99}</strong>
            </p>
          </div>
        </section>
        <section className="directed-to-icon">
          <MdOutlineArrowRightAlt size={106} />
        </section>

        <section className="deal-buyer__address">
          <p>In-Person Delivery</p>
          <p>1200 B Gale Wilson Blvd Fairfield Ca 94533</p>
          <p>12/17/25</p>
        </section>

        <section className='deal-select__wrapper'>
          <input type="checkbox" name="" id="" />
        </section>
      </aside>
    </main>
  )
}

export default MyDeal
