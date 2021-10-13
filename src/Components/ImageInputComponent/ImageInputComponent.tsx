import { Box, Button, Image } from '@chakra-ui/react'
import React, { useRef, useState, useEffect } from 'react'
import classes from './styles/imageinput.module.css'

type props = { name: string, src: string, setImgForm: any }

const fileReader = new FileReader();

const ImageInputComponent = ({ name, src, setImgForm }: props) => {

  const ref = useRef<HTMLInputElement>(null);

  const handleLoadImage = ({ target }: ProgressEvent<FileReader>) => {
    if (target) {
      const result = target.result as string;
      setImgForm((prevState) => ({
        ...prevState,
        image: result
      }))
    }
  }

  useEffect(() => {
    fileReader.addEventListener("load", handleLoadImage)
    return () => {
      fileReader.removeEventListener("load", handleLoadImage)
    }
  }, [])


  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target !== null) {
      const file = target.files ? target.files[0] : new Blob();
      setImgForm((prevState) => ({
        ...prevState,
        imageFile: file
      }))
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <Box mb="2">
      <Button onClick={handleClick} colorScheme="teal">Elije una imagen</Button>
      <input accept=".jpg, .png" type="file" ref={ref} name={name} onChange={handleChange} className={classes.hiddenFileInput} />
      {src && <Image src={src} boxSize="xs" alt={src} />}
    </Box>
  )
}

export default ImageInputComponent
