import React from 'react'
import Rating from '@mui/material/Rating'
import mockProductData, {
  Product,
} from '../../__mocks__/data/mock-products-data'
import './product.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  product: Product
  prodURL: string
}

const ProductCard = ({ prodURL, product }: Props) => {
  let { id, image, title, price, rating } = product
  const navigate = useNavigate()
  const viewProductPage = () => {
    navigate(prodURL, { state: mockProductData[id] })
  }
  return (
    <div className="product" onClick={viewProductPage}>
      <img src={image[0]} alt={title} />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          <Rating name="read-only" size={'small'} value={rating} readOnly />
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  )
}

export default React.memo(ProductCard)
