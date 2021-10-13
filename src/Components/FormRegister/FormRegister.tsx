import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ValidationsRegister,
  ErroRegister,
  LOCAL_STORAGE_KEY,
} from '../../constants/constants'
import { FormRegisterTypes } from './FormRegisterTypes'
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Input,
  FormHelperText,
  Text,
  Container,
} from '@chakra-ui/react'
import { RegisterService } from '../../services/RegisterService'
import { useHistory } from 'react-router'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { LoginService } from '../../services/Loginservice'
import { useDispatch } from 'react-redux'
import { logIN } from '../../Slices/AuthSlice/AuthSlice'
function FormRegister(): JSX.Element {
  let dispatch = useDispatch()
  let history = useHistory()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterTypes>({
    mode: 'onTouched',
  })
  let [errorauth, seterrorauth] = useState<any>(null)
  async function formClick(values: FormRegisterTypes) {
    seterrorauth(null)
    try {
      await RegisterService(values)
      let postuser = await LoginService(values)
      const user = {
        logged: true,
        token: postuser.data.token,
        role: postuser.data.role,
        id: postuser.data.id,
      }
      dispatch(logIN(user))
      //save the user with the token and role in localStorage
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
      history.push('/')
      // history.push("/login");
    } catch (err) {
      seterrorauth(ErroRegister)
    }
  }

  return (
    <form onSubmit={handleSubmit(formClick)}>
      <Container>
        <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="Ingrese su nombre"
              borderColor={errors.firstName && 'red'}
              type="text"
              {...register('firstName', {
                required: ValidationsRegister.name.MSGREQUIRED,
                minLength: {
                  value: ValidationsRegister.name.MINLONGNAME,
                  message: ValidationsRegister.name.MSGERRMINAME,
                },
                maxLength: {
                  value: ValidationsRegister.name.MAXLONGNAME,
                  message: ValidationsRegister.name.MSGERRMAXNAME,
                },
              })}
            />
            <FormHelperText color="red">
              {errors?.firstName?.message}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input
              placeholder="Ingrese su apellido"
              borderColor={errors.lastName && 'red'}
              type="text"
              {...register('lastName', {
                required: ValidationsRegister.lastname.MSGREQUIRED,
                minLength: {
                  value: ValidationsRegister.lastname.MINLONGLNAME,
                  message: ValidationsRegister.lastname.MSGERRMINAME,
                },
                maxLength: {
                  value: ValidationsRegister.lastname.MAXLONGLNAME,
                  message: ValidationsRegister.lastname.MSGERRMAXNAME,
                },
              })}
            />
            <FormHelperText color="red">
              {errors?.lastName?.message}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Ingrese su correo electrónico"
              borderColor={errors.email && 'red'}
              {...register('email', {
                required: ValidationsRegister.email.MSGREQUIRED,
                pattern: {
                  value: ValidationsRegister.email.PATTERNEMAIL,
                  message: ValidationsRegister.email.MSGERROREMAIL,
                },
              })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              placeholder="Ingrese su contraseña"
              borderColor={errors.password && 'red'}
              type={ValidationsRegister.password.TYPE}
              {...register('password', {
                required: ValidationsRegister.password.MSGREQUIRED,
                minLength: {
                  value: ValidationsRegister.password.MINVALUE,
                  message: ValidationsRegister.password.MSGERR,
                },
              })}
            />
            <FormHelperText color="red">
              {errors?.password?.message}
            </FormHelperText>
          </FormControl>
          <Button type="submit" size="lg" colorScheme="teal">
            <ChevronRightIcon /> Registrarse
          </Button>
          <Text color="red">{errorauth !== null && errorauth}</Text>
        </Stack>
      </Container>
    </form>
  )
}
export default FormRegister
