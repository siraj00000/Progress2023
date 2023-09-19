import React, { useRef } from 'react'
import { SmallUploadPlaceholder, UploadPlaceholder } from '../../assets'

type Props = {
  selectedImages: File[]
  setSelectedImages: React.Dispatch<React.SetStateAction<File[]>>
}

const UploadProductImages = ({ selectedImages, setSelectedImages }: Props) => {
  let fileInputRef = useRef<HTMLInputElement>(null)
  const handleImageSelection = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const filesArray = Array.from(fileInputRef.current.files)
      setSelectedImages(filesArray)
    }
  }
  const handleUploadImage = () => {
    fileInputRef.current?.click()
  }

  let selectedImagesLength = selectedImages?.length > 1
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
                ? URL.createObjectURL(selectedImages[0])
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
                {selectedImages
                  .slice(1, selectedImages?.length)
                  .map((item, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(item)}
                      alt="upload"
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default UploadProductImages
