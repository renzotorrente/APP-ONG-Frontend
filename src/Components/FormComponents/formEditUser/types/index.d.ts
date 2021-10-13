import { ROLES } from "../../../../constants/constants";
import { UseFormRegister, DeepMap, FieldError } from 'react-hook-form'
import { string } from "yup/lib/locale";
export type FormDataType = {
  firstName?: string,
  lastName?: string,
  role?: string
}

export type userType = {
  firstName: string,
  lastName: string,
  id?: string,
  role: string
}

export type FormUpdateUserProps = {
  onSubmit: (user:userType)=> void,
  isAdmin: boolean,
  defaultValues: FormDataType
}

export type rolesKey = keyof typeof ROLES;

export type FieldProps = {
  register: UseFormRegister<FormDataType>,
  errors: DeepMap<FormDataType, FieldError>
}