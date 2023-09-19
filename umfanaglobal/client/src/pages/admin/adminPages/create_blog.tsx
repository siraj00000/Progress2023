import { useEffect, useState } from 'react'
import { handleInsertAction } from '../../../utils/api'
import { getToken } from '../../../service/auth-service'
import ErrorAlert from '../../../components/alerts/error_alert'
import SuccessAlert from '../../../components/alerts/success_alert'
import { useNavigate } from 'react-router-dom'
import { UploadResponse } from '../../../types/response.types'
import { removeStatus } from '../../../utils/remove_status'

type Props = {}

const BlogCreation = (props: Props) => {
  const [status, setStatus] = useState({ error: '', success: '' })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')
  const [blogPara, setBlogPara] = useState<string>('')

  const navigate = useNavigate()

  const token = getToken()

  useEffect(() => {
    if (token === null) {
      navigate('/umfanaglobals/admin')
    }
  }, [navigate, token])

  const clearStates = () => {
    setImageUrl('')
    setSelectedFile(null)
    setTitle('')
    setBlogPara('')
    removeStatus(setStatus, { error: '', success: '' })
  }

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0])
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = () => {
        setImageUrl(reader.result as string)
      }
    }
  }

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleBlogParaInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setBlogPara(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (selectedFile) {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('blogPara', blogPara)
        formData.append('image', selectedFile)

        if (token) {
          const response = (await handleInsertAction({
            url: `/api/blog-post`,
            data: formData,
            token,
            type: 'multipart/form-data',
          })) as UploadResponse

          if (response.data.success) {
            setStatus({ error: '', success: 'Blog Uploaded!' })
            clearStates()
          }
        }
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setStatus({ error: error.response.data.error, success: '' })
      }
    }
  }
  return (
    <main className="p-[10%] bg-black">
      <h1 className="text-xl text-dark font-bold text-center">Create Blog</h1>
      <section className="flex items-center justify-center gap-5 my-5">
        <div className="w-1/2">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <ErrorAlert title="Error" message={status.error} />
            <SuccessAlert title="Success" message={status.success} />

            <div className="my-4">
              <label className="text-gray-500 font-bold">Title</label>
              <input
                name="title"
                placeholder="Enter title here..."
                value={title}
                onChange={handleTitleInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                required
              />
            </div>
            <div className="my-4">
              <label className="text-gray-500 font-bold">Blog</label>
              <textarea
                name="blogPara"
                placeholder="Enter blog here..."
                value={blogPara}
                onChange={handleBlogParaInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 h-28 text-gray-700 leading-tight resize-none"
                required
              />
            </div>
            <div className="my-4">
              <label className="text-gray-500 font-bold">Blog Image</label>
              <input
                name="image"
                type="file"
                onChange={handleFileInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dark text-white text-md font-bold py-2 px-4 rounded my-4"
            >
              Upload
            </button>
          </form>
        </div>
        <div className="w-1/2 max-h-[400px] rounded-md relative">
          {imageUrl && (
            <img src={imageUrl} alt="Uploaded" className="w-full h-[400px]" />
          )}
        </div>
      </section>
    </main>
  )
}

export default BlogCreation
