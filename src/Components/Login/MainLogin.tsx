import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Text,
} from '@chakra-ui/react'
import messages from './messages.json'
import { LoginType } from './LoginType'
import {
  AUTH,
  ErrorLogin,
  LOCAL_STORAGE_KEY,
  PATTERN_EMAIL,
} from '../../constants/constants'
import { PASSWORD_MIN_LENGTH } from '../../constants/constants'
import { useHistory } from 'react-router'
import { LoginService } from '../../services/Loginservice'
import { useDispatch } from 'react-redux'
import { logIN } from '../../Slices/AuthSlice/AuthSlice'
import { ChevronRightIcon } from '@chakra-ui/icons'
export default function MainLogin(): JSX.Element {
  let [errorlogin, seterrorlogin] = useState<any>(null)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  let history = useHistory()
  let dispatch = useDispatch()
  async function onSubmit(values: LoginType) {
    seterrorlogin(null)
    try {
      let postuser = await LoginService(values)

      const user = {
        logged: true,
        token: postuser.data.token,
        role: postuser.data.role,
        id: postuser.data.id,
      }

      dispatch(logIN(user))

      //save the user with the token in localStorage
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
      history.push('/')
    } catch (err) {
      seterrorlogin(ErrorLogin)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email} marginTop={2}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder={messages.email_placeholder}
            {...register('email', {
              required: messages.email_error_required,
              pattern: PATTERN_EMAIL,
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
            {errors.email?.type === 'pattern' && messages.email_error_pattern}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} marginTop={4}>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder={messages.password_placeholder}
            {...register('password', {
              required: messages.password_error_required,
              minLength: PASSWORD_MIN_LENGTH,
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
            {errors.password?.type === 'minLength' &&
              messages.password_error_minLenght}
          </FormErrorMessage>
        </FormControl>
        <Button
          marginTop={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          width={'100%'}
        >
          <ChevronRightIcon /> Iniciar sesión
        </Button>
        <Text color="red">{errorlogin !== null && errorlogin}</Text>
      </form>
    </Container>
  )
}
