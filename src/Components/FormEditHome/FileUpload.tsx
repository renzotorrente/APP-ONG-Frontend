import { Box, Button } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FILE, UPLOAD_IMAGE } from '../../constants/constants'
import { FileUploadProps } from './InterfaceFormEdit'
import classes from './styles/FileUploadStlye.module.css'

const FileUpload = ({ accept, changeImage }: FileUploadProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleClick = () => inputRef.current?.click()
  const [error, setError] = useState('')

  const handleError = (error: string) => {
    setError(error)
  }

  return (
    <>
      <input
        type={FILE}
        hidden
        accept={accept}
        ref={inputRef}
        onChange={(e) => changeImage(e, handleError)}
      />
      <Box className={classes.fileUploadContainer}>
        <Button onClick={handleClick}>{UPLOAD_IMAGE}</Button>
        <p>{error}</p>
      </Box>
    </>
  )
}

export default FileUpload
