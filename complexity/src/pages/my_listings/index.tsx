import React, { useEffect, useState } from 'react'
import './my-listings.css'
import { Product } from '../../__mocks__/data/mock-products-data'
import { getProducts } from '../../__mocks__/services/product.api'
import { Button, Stack } from '@mui/material'
import ProductCard from '../../components/product'
import { useNavigate } from 'react-router-dom'

type Props = {}

const MyListings = (props: Props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    let isMounted = true
    const fetchProducts = async () => {
      try {
        const result = await getProducts()
        if (isMounted) {
          setProducts(result)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()

    return () => {
      isMounted = false
    }
  }, [])

  const navigateToAddNewListings = () => {
    navigate('add-listings')
  }

  return (
    <main className="-main-myListings">
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        width={'100%'}
      >
        <Button onClick={navigateToAddNewListings}>+ Add New Listing</Button>
      </Stack>
      <section className="-main-product-wrapper">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            product={item}
            prodURL={`/listings/product`}
          />
        ))}
      </section>
    </main>
  )
}

export default MyListings
