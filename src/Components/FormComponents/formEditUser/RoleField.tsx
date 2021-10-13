import React from 'react'
import { FormControl, FormLabel, Input, Text, Select } from '@chakra-ui/react'
import {ROLES} from '../../../constants/constants'
import { capitalize } from '../../../utilities/stringUtils';

import { FieldProps, rolesKey } from './types'

const RoleField = ({register, errors}:FieldProps) => {
  return (
    <FormControl id="role" mb={3}>
        <FormLabel fontSize="1.1rem">Rol:</FormLabel>
        <Select placeholder="Selecciona un rol" {...register("role",{required:true})}>
        {(Object.keys(ROLES) as Array<rolesKey>).map((key:rolesKey)=>{
          const role = ROLES[key];
          return <option key={role} value={role}>{capitalize(role)}</option>
        })}
        </Select>
        {errors.role?.type === "required" && (
          <Text color="red">Campo Requerido</Text>
        )}
      </FormControl>
  )
}

export default RoleField
