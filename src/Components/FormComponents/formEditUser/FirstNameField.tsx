import React from 'react'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

import { FieldProps } from './types'

const FirstNameField = ({register, errors}:FieldProps) => {
  return (
    <FormControl id="firsName" mb={3}>
        <FormLabel fontSize="1.1rem">Nombre: </FormLabel>
        <Input
          type="text"
          placeholder="Nombre"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <Text color="red">Campo Requerido</Text>}
      </FormControl>
  )
}

export default FirstNameField
