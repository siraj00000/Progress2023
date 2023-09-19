import { useLocation, useNavigate } from 'react-router-dom'
import MultiProducts from '../../components/product/multi-products'
import Rating from '@mui/material/Rating'
import ButtonWithTextAndParagraph from '../../components/others/ButtonWithTextAndParagraph'
import { Product } from '../../__mocks__/data/mock-products-data'
import { Button, Stack } from '@mui/material'
import { BsChevronDown } from 'react-icons/bs'
import { useMemo } from 'react'

const ViewListingProduct = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  let data = state as Product
  let rating = useMemo(() => data.rating, [data])
  const editProduct = () => {
    navigate(`/listings/edit-listings`, { state: data })
  }
  return (
    <main className="view-product__main">
      <aside className="-view-product">
        {/* Product Image Section */}
        <section>
          <div className="">
            <MultiProducts productImage={data.image} />
          </div>
        </section>
        {/* Product Description Section  */}
        <section>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            width={'100%'}
          >
            <Button className="stack-button" onClick={editProduct}>
              Edit Listing
            </Button>
          </Stack>
          <p className="product__description">{data.description}</p>
          <div className="">
            <Rating
              name="read-only"
              size={'large'}
              value={rating}
              defaultValue={0}
              readOnly
            />
          </div>

          <p className="product__price">
            <small>Buy Price $</small>
            <strong>{data.price}</strong>
          </p>

          <div className="product__viewOffers">
            <ol className="product__configration">
              <li>Brand : {data.brand}</li>
              <li>Color: {data.color} </li>
              <li>Condition: {data.condition}</li>
              <li>
                Category <BsChevronDown size={20} className="chev" />
              </li>
              <li>
                SubCategory
                <BsChevronDown size={20} className="chev" />
              </li>
            </ol>
            <Button
              variant="contained"
              onClick={() => navigate(`received-offer/${data.id}`)}
            >
              View offers Received (32 New)
            </Button>
          </div>
        </section>
      </aside>

      <aside>
        <ButtonWithTextAndParagraph
          title="Logistics"
          paragraph={`Local Drop off at Dixon Trade space Dixon CA 95620. Available mon-Fri After 6:00, Sat-Sun before noon`}
          heightClassName="paraHeight1"
        />
        <ButtonWithTextAndParagraph
          title="Reviews"
          paragraph=""
          heightClassName="paraHeight2"
        />
      </aside>
    </main>
  )
}

export default ViewListingProduct
