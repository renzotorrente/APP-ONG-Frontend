import React from 'react';
import styles from './styles.css/testimonials.module.css';
import {Flex, Avatar, Box, Button,Icon, Spacer} from '@chakra-ui/react';
import { AttachmentIcon} from '@chakra-ui/icons'

export function ImageField({setimage, image}:{setimage:any, image:any}){
function handleimage(e:any){
if(e.target.files.length >= 1){
let file = e.target.files[0];
let reader = new FileReader();
reader.onloadend = ()=> {
setimage(reader.result);}
reader.readAsDataURL(file);
 }
}
return (
<Flex justifyContent="space-evenly" height="auto" h={{base:"70px", md:"120px", lg:"130px"}} alignItems="center"  w={{base:"70%"}}>
<Avatar
  borderRadius="full"
  boxSize="110px"
  src={image}
  border="0.5px solid"
  borderColor="rgb(214,213,213)"
/>
<Box className={styles.upload_btn_wrapper} alignItems="center">
<Button w="100%" background="white" color="teal" border="1px solid" borderColor="teal" ><Icon  as={AttachmentIcon}/> Cargar Imagen</Button>
<input className={styles.upload_file_buton} type="file"  accept="image/png , image/jpeg"  onChange={(e)=>{handleimage(e)}}/>
</Box>  
</Flex>
)
}