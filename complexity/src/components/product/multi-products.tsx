import React, { useMemo } from 'react'

type Props = {
  productImage: Array<string>
}

const MultiProducts = ({ productImage }: Props) => {
  const generteBlob = () => {
    let list: any = []
    if (list.length !== productImage) {
      productImage?.forEach((element) => {
        let productImg = new Blob([element], { type: 'text/plain' })
        list.push(productImg)
      })
    }
    return list
  }

  const blobImages = useMemo(() => generteBlob(), [productImage])

  let typeOfImage = typeof productImage[0] === 'string'
  return (
    <div className="-multi-product-wrapper">
      <img
        src={typeOfImage ? productImage[0] : URL.createObjectURL(blobImages[0])}
        alt="product"
      />
      <div className="-multi-product-imgs">
        {typeOfImage ? (
          <>
            {productImage.slice(1, productImage?.length).map((item, index) => (
              <img key={index} src={item} alt="product" />
            ))}
          </>
        ) : (
          <>
            {blobImages
              .slice(1, blobImages.length)
              .map((item: any, index: any) => (
                <img
                  key={index}
                  src={URL.createObjectURL(item)}
                  alt="product"
                />
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default React.memo(MultiProducts)
