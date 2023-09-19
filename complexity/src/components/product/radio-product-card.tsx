import React, { useState, useMemo } from 'react'
import './product.css'
import { Product } from '../../__mocks__/data/mock-products-data'
import { Rating } from '@mui/material'

const RadioProductCard = ({ image, title, price, rating }: Product) => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const isChecked = useMemo(() => selectedValue === title, [selectedValue])
  const handleClick = () => {
    setSelectedValue(title)
  }
  return (
    <div className="product" onClick={handleClick}>
      <label>
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
            type="radio"
            checked={isChecked}
            onChange={handleClick}
            name={'product-radio'}
            className="product__checkbox"
            defaultChecked={!selectedValue} // Add this line
          />
        </div>
      </label>
    </div>
  )
}

export default React.memo(RadioProductCard)
