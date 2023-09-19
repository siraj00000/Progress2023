import { Logo, MicroSoftLogo } from '../../assets'
import { Button, Divider, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import './auth.css'
import { useRef, useState } from 'react'
import PasswordTextField from '../../components/textFields/passwordTextField'
import { saveToken } from '../../utils/manageSession'
import { loginUser } from '../../__mocks__/services/auth.api';
const MSLOGO = () => <img src={MicroSoftLogo} alt="microsoft" />

type Props = {}

const Login = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [values, setValues] = useState({ email: '', password: '' })
  const [isContinue, setIsContinue] = useState<boolean>(false)

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
      const response = await loginUser(email, password)
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
        <form onSubmit={handleContinue}>
          {isContinue ? (
            <aside>
              <h4>Enter Your Password</h4>
              <div className="emailbox">
                <h3>{values.email}</h3>
                <button type="button" onClick={editEmail}>
                  Edit
                </button>
              </div>
              <PasswordTextField onChange={onChange} />
              <NavLink to={'/sign-up'}>Forgot password?</NavLink>
            </aside>
          ) : (
            <aside>
              <h4>Auth0</h4>
              <h6>Log in to Auth0 to continue to Auth0 Dashboard.</h6>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={onChange}
                ref={inputRef}
              />
            </aside>
          )}
          <Button type="submit" variant="contained">
            Continue
          </Button>
          <p>
            Don’t have an account? <NavLink to={'/sign-up'}>Signup</NavLink>
          </p>
        </form>

        {!isContinue ? (
          <Divider orientation="horizontal" flexItem>
            OR
          </Divider>
        ) : null}

        {!isContinue ? (
          <aside className="social-button">
            <Button
              variant="outlined"
              startIcon={<AiFillLinkedin color="#0A66C2" size={25} />}
            >
              Continue with Linkedin
            </Button>
            <Button variant="outlined" startIcon={<MSLOGO />}>
              Continue with Microsoft
            </Button>
            <Button
              variant="outlined"
              startIcon={<AiFillGithub color="#000000" size={25} />}
            >
              Continue with Github
            </Button>
            <Button variant="outlined" startIcon={<FcGoogle />}>
              Continue with Google
            </Button>
          </aside>
        ) : null}
      </section>
    </main>
  )
}

export default Login
