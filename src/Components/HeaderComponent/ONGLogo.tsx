import React from 'react'
import { Image } from '@chakra-ui/react'
import { ONGLogoProps } from './types'
import { Link } from 'react-router-dom'

const ONGLogo = ({ src, name }: ONGLogoProps): JSX.Element => {
  return (
    <Link
      to="/"
      style={{
        width: '100px',
      }}
    >
      <Image src={src} alt={name} />
    </Link>
  )
}

export default ONGLogo
