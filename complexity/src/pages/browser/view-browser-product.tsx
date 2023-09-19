import { NavLink, useLocation } from 'react-router-dom'
import MultiProducts from '../../components/product/multi-products'
import Rating from '@mui/material/Rating'
import ButtonWithTextAndParagraph from '../../components/others/ButtonWithTextAndParagraph'
import { Product } from '../../__mocks__/data/mock-products-data'

const ViewProduct = () => {
  const { state } = useLocation()
  let data = state as Product

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
          <p className="product__description">{data.description}</p>
          <div className="">
            <Rating
              name="read-only"
              size={'large'}
              value={data.rating}
              readOnly
            />
          </div>

          <p className="product__price">
            <small>Buy Price $</small>
            <strong>{data.price}</strong>
          </p>

          <div className="offer__container">
            <NavLink to={`make-offer/${data.id}`}>Make an Offer</NavLink>
            <NavLink to={`see-offer/${data.id}`}>See Offers Made</NavLink>
            <NavLink to={'make-offer'}>Pay Buy Price</NavLink>
          </div>

          <ol className="product__configration">
            <li>Brand : {data.brand}</li>
            <li>Color: {data.color} </li>
            <li>Condition: {data.condition}</li>
            <li>Category: {data.category}</li>
            <li>SubCategory: {data.sub_category}</li>
          </ol>
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

export default ViewProduct
