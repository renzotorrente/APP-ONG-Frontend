import { SweetAlertIcon } from 'sweetalert2'

interface alertData {

    title?:string,
    text?:string,
    footer?:string
 
 }
 
 interface customAlertData {
    title?:string,
    text?:string,
    icon?:SweetAlertIcon,
    showCancelButton?:boolean,
    confirmButtonColor?:string,
    cancelButtonColor?:string,
    cancelButtonText?:string,
    confirmButtonText?:string,
    footer?:string
 }
 
 interface callBack {
    ():void
 }
 
 interface callBacks{
    confirmed?:callBack,
    denied?:callBack
 }
 
 interface alertFormat {
    icon?:SweetAlertIcon,
    showCancelButton?:boolean,
    confirmButtonColor?:string,
    cancelButtonColor?:string,
    cancelButtonText?:string,
    confirmButtonText?:string
 }

 export type {
     alertData,
     customAlertData,
     callBack,
     callBacks,
     alertFormat
 }