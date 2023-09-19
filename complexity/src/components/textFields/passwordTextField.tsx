import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

type Props = {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
}

const PasswordTextField = (props: Props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <FormControl sx={{ width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        onChange={props.onChange}
        name="password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <MdOutlineVisibilityOff size={35} />
              ) : (
                <MdOutlineVisibility size={35} />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}

export default React.memo(PasswordTextField)
