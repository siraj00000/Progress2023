import { useState } from 'react'
import { handleInsertAction } from '../../../utils/api'
import ErrorAlert from '../../../components/alerts/error_alert'
import SuccessAlert from '../../../components/alerts/success_alert'
import { ApiResponse } from '../../../types/response.types'
import { NavLink } from 'react-router-dom'

type Props = {}

const AdminRegistration = (props: Props) => {
  const [status, setStatus] = useState({ error: '', success: '' })
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  })

  const onChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      let url = `/api/register-user`
      let data = values
      const response = (await handleInsertAction({ url, data })) as ApiResponse

      if (response.data.success) {
        let token = response.data.token
        sessionStorage.setItem('_umfanadmintoken', token)
        setStatus({ error: '', success: 'Admin Registered!' })
        window.location.href = '/umfanaglobals/admin'
      }
    } catch (err) {
      let error = err as any
      if (error.response && error.response.data) {
        setStatus({ error: error.response.data.error, success: '' })
      }
    }
  }
  return (
    <main className="p-[10%] bg-black">
      <form className="w-full max-w-sm mx-auto" onSubmit={handleLogin}>
        <ErrorAlert title="Error" message={status.error} />
        <SuccessAlert title="Success" message={status.success} />

        <div className="my-4">
          <label className="text-gray-100 font-bold">Name</label>
          <input
            name="name"
            placeholder="mark"
            value={values.name}
            onChange={onChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
          />
        </div>

        <div className="my-4">
          <label className="text-gray-100 font-bold">Email</label>
          <input
            name="email"
            type="email"
            placeholder="mark@example.com"
            value={values.email}
            onChange={onChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
          />
        </div>

        <div className="">
          <label className="text-gray-100 font-bold">Password</label>
          <input
            name="password"
            type="password"
            placeholder="******************"
            value={values.password}
            onChange={onChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
          />
        </div>

        <button className="w-full bg-dark text-white text-md font-bold py-2 px-4 rounded my-4">
          Register
        </button>
        <p className="text-white">
          Already have an account?
          <NavLink to={'/umfanaglobals/admin'} className="text-dark ml-1">
            Login
          </NavLink>
        </p>
      </form>
    </main>
  )
}

export default AdminRegistration
