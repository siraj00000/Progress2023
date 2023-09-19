import React, { useState } from 'react'
import './product.css'
import { Product } from '../../__mocks__/data/mock-products-data'
import { Rating } from '@mui/material'

const CheckableProductCard = ({ image, title, price, rating }: Product) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <div className="product">
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
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          name={title}
          className="product__checkbox"
        />
      </div>
    </div>
  )
}

export default React.memo(CheckableProductCard)
