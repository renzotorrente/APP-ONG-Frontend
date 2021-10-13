import React from 'react'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { LoadingGadgetProps } from './types';

const DEFAULT_LOADER_TYPE= "Audio";


const LoadingGadget = ({type = DEFAULT_LOADER_TYPE,...rest}:LoadingGadgetProps): JSX.Element => {
  return (
    <Loader type={type} {...rest}/>
  )
}

export default LoadingGadget;

