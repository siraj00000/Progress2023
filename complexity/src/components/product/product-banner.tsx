import React, { useState, useEffect } from 'react'
import { Walkie3 } from '../../assets'
import { Rating } from '@mui/material'
import { getProductById } from '../../__mocks__/services/product.api'
import { Product } from '../../__mocks__/data/mock-products-data'

type Props = {
  id: number
}

const ProductBanner = ({ id }: Props) => {
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    let isMounted = true

    const fetchProduct = async () => {
      try {
        const result = await getProductById(id);
        if (isMounted && result) {
          setProduct(result)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchProduct()

    return () => {
      isMounted = false
    }
  }, [])
  return (
    <aside className="product-banner__wrapper">
      <section>
        <img src={product?.image[0]} alt="walkie" />
      </section>
      <section>
        <p className="product__description">{product?.description}</p>
        <div className="">
          <Rating name="read-only" size={'large'} value={product?.rating} readOnly />
        </div>

        <p className="product__price">
          <small>Buy Price $</small>
          <strong>{product?.price}</strong>
        </p>
      </section>
    </aside>
  )
}

export default React.memo(ProductBanner)
