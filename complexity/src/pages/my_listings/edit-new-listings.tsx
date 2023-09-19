import React, { useState } from 'react'
import { Button, Stack } from '@mui/material'
import './my-listings.css'
import ButtonWithTextAndParagraph from '../../components/others/ButtonWithTextAndParagraph'
import EditUploadProductImages from '../../components/product/edit-upload-product-image'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {}

const EditNewListings = (props: Props) => {
  const { state: __data } = useLocation()

  const navigate = useNavigate()
  const [selectedImages, setSelectedImages] = useState<Array<string | File>>([])
  const [data, setData] = useState(__data)

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const UploadProduct = () => {
    if (selectedImages.length !== 0) {
      data['image'] = selectedImages
    }
    navigate(`/listings/product`, { state: data })
  }
  let productImages = selectedImages.length !== 0 ? selectedImages : data.image

  return (
    <main className="-main-myListings">
      <aside className="listings-section-wrapper">
        <section>
          <EditUploadProductImages
            selectedImages={productImages}
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
            value={data?.description}
          />

          <div className="product__info_wrapper">
            <div className="product__detaildinfo">
              <input
                type="text"
                placeholder="Brand"
                name="brand"
                onChange={onChange}
                value={data?.brand}
              />
              <input
                type="text"
                placeholder="Color"
                name="color"
                value={data?.color}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Condition"
                name="condition"
                value={data?.condition}
                onChange={onChange}
              />
              <select
                name="category"
                placeholder="Category"
                className="category"
                value={data?.category}
                onChange={onSelect}
              >
                <option value="Category A">Category A</option>
                <option value="Category B">Category B</option>
                <option value="Category C">Category C</option>
              </select>
              <select
                name="sub_category"
                placeholder="Subcategory"
                value={data?.sub_category}
                onChange={onSelect}
              >
                <option value="Subcategory A">Subcategory A</option>
                <option value="Subcategory B">Subcategory B</option>
                <option value="Subcategory C">Subcategory C</option>
              </select>
            </div>
            <div className="product__info">
              <input
                name="price"
                value={data?.price}
                type="text"
                placeholder="Enter Buy Price $"
                onChange={onChange}
              />

              <div className="product__btn">
                <button>
                  Verified{' '}
                  <input className="check" type="checkbox" name="" id="" />
                </button>
                <button>
                  Available?{' '}
                  <input className="check" type="checkbox" name="" id="" />
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

export default EditNewListings
