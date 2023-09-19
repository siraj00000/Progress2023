import { useEffect, useState } from 'react'
import ProductBanner from '../../components/product/product-banner'
import { Button } from '@mui/material'
import './my-listings.css'
import { Product } from '../../__mocks__/data/mock-products-data'
import { getProducts } from '../../__mocks__/services/product.api'
import { useParams } from 'react-router-dom'
import RadioProductCard from '../../components/product/radio-product-card';

type Props = {}

const ViewReceivedOffer = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([])
  const { id } = useParams()
  let __id = Number(id)

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
    <main className="received-offer__main">
      <ProductBanner id={__id} />

      <div className="received-offer-offer__button-wrapper">
        <Button variant="contained">Accept Selected Offer</Button>
      </div>

      <section className="-main-product-wrapper">
        {products.map((item, index) => (
          <RadioProductCard key={index} {...item} />
        ))}
      </section>
    </main>
  )
}

export default ViewReceivedOffer