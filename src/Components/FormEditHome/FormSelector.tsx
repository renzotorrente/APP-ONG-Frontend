import { FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'
import {
  FIRST_IMAGE,
  SECOND_IMAGE,
  SELECT_IMAGE,
  THIRD_IMAGE,
} from '../../constants/constants'
import { FormSelectorProps } from './InterfaceFormEdit'

const FormSelector = ({
  target,
  setTarget,
}: FormSelectorProps): JSX.Element => {
  return (
    <>
      <FormLabel>{SELECT_IMAGE}</FormLabel>
      <RadioGroup value={target} onChange={setTarget}>
        <HStack spacing="24px">
          <Radio value={0}>{FIRST_IMAGE}</Radio>
          <Radio value={1}>{SECOND_IMAGE}</Radio>
          <Radio value={2}>{THIRD_IMAGE}</Radio>
        </HStack>
      </RadioGroup>
    </>
  )
}

export default FormSelector
