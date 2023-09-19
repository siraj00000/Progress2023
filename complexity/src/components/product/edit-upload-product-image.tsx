import React, { useRef, useMemo } from 'react'
import { SmallUploadPlaceholder, UploadPlaceholder } from '../../assets'

type Props = {
  selectedImages: Array<string>
  setSelectedImages: React.Dispatch<React.SetStateAction<Array<any>>>
}

const EditUploadselectedImagess = ({
  selectedImages,
  setSelectedImages,
}: Props) => {
  let fileInputRef = useRef<HTMLInputElement>(null)
  const generteBlob = (imageList: any) => {
    let list: any = []
    if (list.length !== imageList) {
      imageList?.forEach((element: any) => {
        let productImg = new Blob([element], { type: 'text/plain' })
        list.push(productImg)
      })
    }
    return list
  }
  const handleImageSelection = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const filesArray = Array.from(fileInputRef.current.files)
      const fileBlobArray = generteBlob(filesArray)
      setSelectedImages(fileBlobArray)
    }
  }

  const handleUploadImage = () => {
    fileInputRef.current?.click()
  }

  const blobImages = useMemo(() => generteBlob(selectedImages), [
    selectedImages,
  ])
  let selectedImagesLength = selectedImages?.length > 1
  let typeOfImage = typeof selectedImages[0] === 'string'

  return (
    <div>
      <aside>
        <div className="product__image-placeholder">
          <input
            type="file"
            multiple
            onChange={handleImageSelection}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <img
            src={
              selectedImages?.length > 0
                ? typeOfImage
                  ? selectedImages[0]
                  : URL.createObjectURL(blobImages[0])
                : UploadPlaceholder
            }
            alt="upload"
            onClick={handleUploadImage}
          />
          <div className="product__small-placeholder-wrapper">
            {!selectedImagesLength ? (
              <>
                {[1, 2, 3, 4, 5].map((index) => (
                  <img key={index} src={SmallUploadPlaceholder} alt="upload" />
                ))}
              </>
            ) : (
              <>
                {typeOfImage ? (
                  <>
                    {selectedImages
                      .slice(1, selectedImages?.length)
                      .map((item, index) => (
                        <img key={index} src={item} alt="upload" />
                      ))}
                  </>
                ) : (
                  <>
                    {blobImages
                      .slice(1, blobImages?.length)
                      .map((item: any, index: any) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(item)}
                          alt="upload"
                        />
                      ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default EditUploadselectedImagess
