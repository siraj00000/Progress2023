import React, { useState, useEffect } from 'react'
import { Button, Stack } from '@mui/material'
import './my-listings.css'
import ButtonWithTextAndParagraph from '../../components/others/ButtonWithTextAndParagraph'
import UploadProductImages from '../../components/product/upload-product-images'
import mockProductData from '../../__mocks__/data/mock-products-data'
import { useNavigate } from 'react-router-dom'

type Props = {}

const AddNewListings = (props: Props) => {
  const navigate = useNavigate()
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [data, setData] = useState({
    id: mockProductData.length,
    image: selectedImages,
    title: 'Product 2',
    description: '',
    rating: 5,
    price: '',
    brand: '',
    color: '',
    condition: '',
    category: '',
    sub_category: '',
  })

  useEffect(() => {
    setData((prev) => ({ ...prev, image: selectedImages }))
  }, [selectedImages])

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const UploadProduct = () => {
    navigate(`/listings/product`, { state: data })
  }
  return (
    <main className="-main-myListings">
      <aside className="listings-section-wrapper">
        <section>
          <UploadProductImages
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </section>
        <section>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            width={'100%'}
          >
            <Button onClick={UploadProduct}>+ Save Listing</Button>
          </Stack>
          <textarea
            name="description"
            placeholder="Insert Description Here"
            onChange={onChangeTextArea}
          />

          <div className="product__info_wrapper">
            <div className="product__detaildinfo">
              <input
                type="text"
                placeholder="Brand"
                name="brand"
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Color"
                name="color"
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Condition"
                name="condition"
                onChange={onChange}
              />
              <select
                name="category"
                placeholder="Category"
                className="category"
                onChange={onSelect}
              >
                <option value="Category A">Category A</option>
                <option value="Category B">Category B</option>
                <option value="Category C">Category C</option>
              </select>
              <select
                name="sub_category"
                placeholder="Subcategory"
                onChange={onSelect}
              >
                <option value="Subcategory A">Subcategory A</option>
                <option value="Subcategory B">Subcategory B</option>
                <option value="Subcategory C">Subcategory C</option>
              </select>
            </div>
            <div className="product__info">
              <input
                className='product___info_input'
                name="price"
                type="text"
                placeholder="Enter Buy Price $"
                onChange={onChange}
              />

              <div className="product__btn">
                <button>
                  Verified <input type="checkbox" name="" id="" />
                </button>
                <button>
                  Available? <input type="checkbox" name="" id="" />
                </button>
              </div>
            </div>
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

export default AddNewListings
