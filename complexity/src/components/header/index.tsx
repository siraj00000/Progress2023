import React from 'react'
import { Button, Stack } from '@mui/material'
import Navbar from './navbar'
import './header.css'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../utils/manageSession'

type Props = {}

const Header = (props: Props) => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate('/')
  const navigateToLogin = () => navigate('/login')
  const navigateToSignUp = () => navigate('/sign-up')

  let token = sessionStorage.getItem('complexity_token')
  return (
    <header>
      <section>{token ? <Navbar /> : null}</section>
      <section>
        <h1 onClick={navigateToHome}>Complexity</h1>
      </section>
      <section>
        <Stack direction="row" justifyContent={'flex-end'} spacing={2}>
          {!token ? (
            <>
              <Button variant="contained" onClick={navigateToLogin}>
                Login
              </Button>
              <Button variant="contained" onClick={navigateToSignUp}>
                SignUp
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={removeToken}>
              Logout
            </Button>
          )}
        </Stack>
      </section>
    </header>
  )
}

export default React.memo(Header)
