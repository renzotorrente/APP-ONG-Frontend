import { FormControl } from '@chakra-ui/form-control';
import { Flex, FormLabel, Input, FormHelperText, Button,Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateTestimonialService, UpdateTestimonial } from '../../services/TestimonialFormService';
import { Editor } from './Editor';
import { ImageField } from './ImageField';
import { testimonio } from './TestimonioTypes';
import { ValidationsRegister } from '../../constants/constants';
function TestimonialsForm({Testimonio}:{Testimonio?:testimonio}){
let [editorcontent, seteditorcontent] = useState(Testimonio?.content ? Testimonio.content : '');
let [imagepreview , setimagepreview] = useState<any>(Testimonio?.imagen? Testimonio.imagen : null);
function handleEditorContent(content:any){ seteditorcontent(content) }
const {handleSubmit,register,formState: { errors}} = useForm({defaultValues: {name:Testimonio ? Testimonio.name : "",}});

function onSubmit(values:any){
let testimonial = {
name:values.name,
content: editorcontent,
imagen:imagepreview
}
if(Testimonio?.id){
UpdateTestimonial(testimonial, Testimonio.id);
}else{
CreateTestimonialService(testimonial);
}
seteditorcontent('');
}
return (
<Box w={{base:"auto", md:"600px", lg:"700px"}} m="10px auto" >
<form  onSubmit={handleSubmit(onSubmit)} style={{padding:"10px"}} >
<FormControl>
<FormLabel>Nombre </FormLabel>
<Input
{...register("name",{
    required:ValidationsRegister.name.MSGREQUIRED,
    minLength:{
        value:ValidationsRegister.name.MINLONGNAME,
        message:ValidationsRegister.name.MSGERRMINAME
    },
    maxLength:{
        value:ValidationsRegister.name.MAXLONGNAME,
        message:ValidationsRegister.name.MSGERRMAXNAME
    }
    
})} border="1px solid" borderColor="rgb(214,213,213)"/>
<FormHelperText color="red">{errors?.name?.message}</FormHelperText>
</FormControl>
<FormControl>
<Editor handlechange={handleEditorContent} content={editorcontent}></Editor>
</FormControl>
<FormControl>
<ImageField setimage={setimagepreview} image={imagepreview}/>
</FormControl>
<Button w="100%" background="teal" color="white" type="submit" textAlign="center" _hover={{background:"#4B8080"}}>{Testimonio? "Actualizar" : "Guardar"}</Button>
</form>
</Box>

)   
}
export default TestimonialsForm;