import { Logo2 } from '../../assets'
import ErrorAlert from '../../components/alerts/error_alert'
import SuccessAlert from '../../components/alerts/success_alert'
import {
  INPUT_DATA_LIST,
  InputDataListType,
  inputSchema,
  inputSchemaType,
} from '../../data/inputDatalist'
import { useState } from 'react'
import { handleInsertAction } from '../../utils/api'
type Props = {}

const Nominate = (props: Props) => {
  const [status, setStatus] = useState({ error: '', success: '' })
  const [values, setValues] = useState<inputSchemaType>(inputSchema)
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  interface NomineeResponse {
    success: boolean
    token: string
    message: string
  }

  interface ApiResponse {
    data: NomineeResponse
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = (await handleInsertAction({
        url: '/api/nominee',
        data: values,
      })) as ApiResponse

      if (response.data.success) {
        setStatus({ error: '', success: 'Nominee Added!' })
        setValues(inputSchema)
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setStatus({ error: error.response.data.error, success: '' })
      }
    }
  }
  return (
    <main>
      <div className="bg-dark border-black relative">
        <div className="shadeTop z-0"></div>
        <section className="py-[10%] px-[5%]">
          <h1 className="text-dark text-[43px] leading-[50px]">Nominate:</h1>

          <div className="flex justify-center gap-2 h-[700px]">
            <div className="w-1/2 h-full flex items-center justify-center bg-[#0C0B0B] z-10">
              <img src={Logo2} alt="Logo-umfanaglobal" />
            </div>
            <div className="w-1/2 bg-light p-5 h-full z-10">
              <form className="py-5 mx-10 text-center" onSubmit={handleSubmit}>
                <ErrorAlert title="Error" message={status.error} />
                <SuccessAlert title="Success" message={status.success} />
                {INPUT_DATA_LIST.map((input: InputDataListType, index) => (
                  <div
                    className="flex flex-col gap-3 mt-5 text-left"
                    key={index}
                  >
                    <label className="font-bold leading-[9px] uppercase text-black">
                      {input.label}
                    </label>
                    <input
                      {...input}
                      value={values[input.name as keyof typeof values]} // type assertion
                      onChange={onChange}
                      className="bg-[#EFF4F7] rounded-[10px] px-[10px] py-[8px]"
                    />
                  </div>
                ))}
                <div className="flex items-center gap-3 my-5">
                  <input
                    type="checkbox"
                    required
                    className="w-[20px] h-[18px] focus:outline-white rounded-sm bg-[#EFF4F7] accent-pink-500"
                  />
                  <p>
                    I agree to the{' '}
                    <span className="font-bold">terms of services</span>
                  </p>
                </div>
                <button className="bg-dark font-bold w-2/3 mx-auto py-3 rounded-full text-light">
                  NOMINATE
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="shadeBottom z-0"></div>
      </div>
    </main>
  )
}

export default Nominate
