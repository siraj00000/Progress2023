import { useEffect, useState } from 'react'
import ProductBanner from '../../components/product/product-banner'
import { Button } from '@mui/material'
import './browser.css'
import { Product } from '../../__mocks__/data/mock-products-data'
import { getProducts } from '../../__mocks__/services/product.api'
import CheckableProductCard from '../../components/product/checkable-product-card'
import { useParams } from 'react-router-dom'
type Props = {}

const MakeOffer = (props: Props) => {
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
    <main className="maker-offer__main">
      <ProductBanner id={__id} />

      <div className="maker-offer-offer__button-wrapper">
        <Button variant="contained">
          Offer Each of the Selected Items Individually
        </Button>
      </div>

      <section className="-main-product-wrapper">
        {products.map((item, index) => (
          <CheckableProductCard key={index} {...item} />
        ))}
      </section>
    </main>
  )
}

export default MakeOffer
