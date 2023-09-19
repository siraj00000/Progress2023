import React, { useEffect } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { PasswordValidationResult } from '../../pages/auth/signup'

type PasswordValidatorProps = {
  password: string
  validationResults: PasswordValidationResult
  setValidationResults: React.Dispatch<
    React.SetStateAction<PasswordValidationResult>
  >
}

function PasswordValidator({
  password,
  validationResults,
  setValidationResults,
}: PasswordValidatorProps) {
  useEffect(() => {
    const validatePassword = (_password: string): PasswordValidationResult => {
      // Password validation rules
      const hasEightChars = _password.length >= 8
      const hasLowerCase = /[a-z]/.test(_password)
      const hasUpperCase = /[A-Z]/.test(_password)
      const hasNumbers = /\d/.test(_password)

      return {
        hasEightChars,
        hasLowerCase,
        hasUpperCase,
        hasNumbers,
      }
    }

    const newValidationResults = validatePassword(password)
    setValidationResults(newValidationResults)
  }, [password, setValidationResults])

  return (
    <div className="validators-container">
      <h5>Your password must contain:</h5>
      <ul>
        <li>
          {validationResults.hasEightChars ? (
            <RiCheckboxCircleFill color="#06B317" size={14} />
          ) : (
            <RiCheckboxBlankCircleLine size={14} />
          )}{' '}
          At least 8 characters
        </li>
        <li>
          {validationResults.hasLowerCase ? (
            <RiCheckboxCircleFill color="#06B317" size={14} />
          ) : (
            <RiCheckboxBlankCircleLine size={14} />
          )}{' '}
          Lower case letters (a-z)
        </li>
        <li>
          {validationResults.hasUpperCase ? (
            <RiCheckboxCircleFill color="#06B317" size={14} />
          ) : (
            <RiCheckboxBlankCircleLine size={14} />
          )}{' '}
          Upper case letters (A-Z)
        </li>
        <li>
          {validationResults.hasNumbers ? (
            <RiCheckboxCircleFill color="#06B317" size={14} />
          ) : (
            <RiCheckboxBlankCircleLine size={14} />
          )}{' '}
          Numbers (0-9)
        </li>
      </ul>
    </div>
  )
}

export default React.memo(PasswordValidator)
