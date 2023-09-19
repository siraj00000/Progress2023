import { Logo } from '../../assets'
import { Button, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './auth.css'
import { useRef, useState } from 'react'
import PasswordTextField from '../../components/textFields/passwordTextField'
import PasswordValidator from '../../components/validators/passwordValidator'
import { saveToken } from '../../utils/manageSession'
import { signupUser } from '../../__mocks__/services/auth.api'

type Props = {}

export type PasswordValidationResult = {
  hasEightChars: boolean
  hasLowerCase: boolean
  hasUpperCase: boolean
  hasNumbers: boolean
}

const SignUp = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [values, setValues] = useState({ email: '', password: '' })
  const [isContinue, setIsContinue] = useState<boolean>(false)

  const [validationResults, setValidationResults] = useState<
    PasswordValidationResult
  >({
    hasEightChars: false,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumbers: false,
  })

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const editEmail = () => {
    setIsContinue((prev) => !prev)

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleLogin = async () => {
    try {
      let { email, password } = values
      const response = await signupUser({ email, password })
      if (response.success) {
        saveToken()
      }
      // Handle successful login
    } catch (error) {
      // Handle login error
      console.log(error)
    }
  }

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (values.email !== '') {
      setIsContinue(true)
    }

    if (isContinue) {
      handleLogin()
    }
  }

  return (
    <main className="-main-auth">
      <section>
        <img src={Logo} alt={'Logo'} />
        <aside>
          <h4>Create your Account</h4>
          <form onSubmit={handleContinue}>
            {isContinue ? (
              <>
                <div className="emailbox">
                  <h3>{values.email}</h3>
                  <button type="button" onClick={editEmail}>
                    Edit
                  </button>
                </div>
                <PasswordTextField onChange={onChange} />
                {values.password ? (
                  <PasswordValidator
                    password={values.password}
                    validationResults={validationResults}
                    setValidationResults={setValidationResults}
                  />
                ) : null}
              </>
            ) : (
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={onChange}
                ref={inputRef}
              />
            )}
            <Button type="submit" variant="contained">
              Continue
            </Button>
            <p>
              Already have an account? <NavLink to={'/login'}>Login</NavLink>
            </p>
          </form>
        </aside>
      </section>
    </main>
  )
}

export default SignUp
