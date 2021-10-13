import { alertFormat } from './alertBoxInterfaces'


const question:alertFormat = {
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar'
 }
 
 const info:alertFormat = {
    icon: 'info',
 }
 
 const warning:alertFormat = {
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Aceptar'
 }
 
 const error:alertFormat = {
    icon: 'error',
 }
 
 const success:alertFormat = {
    icon: 'success',
 }

 export {
     success,
     error,
     warning,
     info,
     question
 }