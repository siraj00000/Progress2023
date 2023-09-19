import { Button, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { getProducts } from '../../__mocks__/services/product.api'
import { Product } from '../../__mocks__/data/mock-products-data'
import './browser.css'
import ProductCard from '../../components/product'

type Props = {}

const Browse = (props: Props) => {
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

  return (
    <main className="-main-browser">
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'5px'}
      >
        <Button variant="outlined">CATEGORY</Button>
        <Button variant="outlined">DISTANCE</Button>
        <Button variant="outlined">STARTS</Button>
        <Button variant="outlined">PRICE</Button>
      </Stack>

      <section className="-main-product-wrapper">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            product={item}
            prodURL={`/browser/product`}
          />
        ))}
      </section>
    </main>
  )
}

export default Browse
