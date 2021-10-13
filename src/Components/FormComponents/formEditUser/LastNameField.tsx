import React from 'react'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

import { FieldProps } from './types'

const LastNameField = ({register, errors}:FieldProps) => {
  return (
    <FormControl id="lastName" mb={3}>
        <FormLabel fontSize="1.1rem">Apellido: </FormLabel>
        <Input
          type="text"
          placeholder="Apellido"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <Text color="red">Campo Requerido</Text>}
      </FormControl>
  )
}

export default LastNameField
