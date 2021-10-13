import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Stack,
  FormControl,
  FormLabel,
  Avatar,
  Button,
  FormHelperText,
  Input,
  Heading,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  createOrganizationService,
  ServiceEditOrganization,
} from '../../services/PostEditProfileOrganization'
import {
  ValidateImg,
  ValidateName,
  ValidateWelcomeText,
} from '../../constants/constants'
import { data } from './types'
import { errorAlert, successAlert } from '../alertBox'

type prop = {
  action: 'update' | 'create'
  ong?: {
    name: string
    welcomeText: string
    image: string
  }
}

function FormEditOrganization({ action, ong }: prop): JSX.Element {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required(ValidateName.Required)
      .min(ValidateName.MinLong, ValidateName.MinLongMsg)
      .max(ValidateName.MaxLong, ValidateName.MaxLongMsg),
    welcomeText: yup
      .string()
      .required(ValidateWelcomeText.Required)
      .min(ValidateWelcomeText.MinLong, ValidateWelcomeText.MinLongMsg)
      .max(ValidateWelcomeText.MaxLong, ValidateWelcomeText.MaxLongMsg),
    image: yup.mixed().test(ValidateImg.type, ValidateImg.MsgErr, (value) => {
      return (
        value[0] &&
        (value[0].type === ValidateImg.imgJPEG ||
          value[0].type === ValidateImg.imgJPG ||
          value[0].type === ValidateImg.imgPNG)
      )
    }),
  })

  const defaultV = ong
    ? { name: ong.name, welcomeText: ong.welcomeText, image: '' }
    : {}

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: defaultV,
  })
  async function formSaved(values: data) {
    if (action === 'update') {
      try {
        await ServiceEditOrganization(values)
        successAlert({ title: 'Se ha editado con éxito' })
      } catch (error) {
        errorAlert({ title: 'Ha ocurrido un error' + error })
      }
    } else if (action === 'create') {
      try {
        await createOrganizationService(values)
        successAlert({ title: 'Se ha creado con éxito' })
      } catch (error) {
        errorAlert({ title: 'Ha ocurrido un error' + error })
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(formSaved)}>
      <Stack maxWidth={400} margin="10px auto" spacing={5} marginTop={5}>
        {action === 'create' ? (
          <Heading as="h3" size="lg">
            Crear organización
          </Heading>
        ) : (
          <Heading as="h3" size="lg">
            Actualizar organización
          </Heading>
        )}
        <FormControl>
          <FormLabel>Nombre de la organización</FormLabel>
          <Input type="text" {...register(ValidateName.Register)} />
          <FormHelperText color="red">{errors?.name?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Texto de bienvenida</FormLabel>
          <Input type="text" {...register(ValidateWelcomeText.Register)} />
          <FormHelperText color="red">
            {errors?.welcomeText?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel mb="none">
            Cambiar logo de la organización{' '}
            <Avatar
              src={ong ? ong.image : 'foto de perfil de la adm'}
              size="sm"
              ml="20px"
            />
          </FormLabel>
          <input
            type="file"
            style={{ color: 'transparent' }}
            {...register(ValidateImg.Register)}
          />
          <FormHelperText color="red">{errors?.image?.message}</FormHelperText>
        </FormControl>
        {action === 'create' ? (
          <Button colorScheme="teal" type="submit">
            Crear
          </Button>
        ) : (
          <Button colorScheme="teal" type="submit">
            Actualizar
          </Button>
        )}
      </Stack>
    </form>
  )
}
export default FormEditOrganization
