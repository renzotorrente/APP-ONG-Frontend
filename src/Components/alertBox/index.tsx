import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { callBacks, customAlertData } from './alertBoxInterfaces'
import { alertData } from './alertBoxInterfaces'
import { warning, error, info, success, question } from "./alertBoxModels"

const warningAlert = ( Data:alertData ) => {

   Swal.fire({...Data,...warning})

} 

const errorAlert = ( Data:alertData ) => {

   Swal.fire({...Data,...error})

}

const successAlert = ( Data:alertData ):void => {

   Swal.fire({...Data,...success})

}

const infoAlert = ( Data:alertData ) => {

   Swal.fire({...Data,...info})

}

function questionAlert( Data:alertData, callbacks:callBacks ):void {

   Swal.fire({...Data,...question}).then( res => {

      if(res.isConfirmed){
         callbacks.confirmed? callbacks.confirmed() : ()=>{}
      }else{
         callbacks.denied? callbacks.denied() : ()=>{}
      }

   })

}

function customAlert( Data:customAlertData, callbacks:callBacks ):void {

   Swal.fire({...Data}).then( res => {

      if(res.isConfirmed){
         callbacks.confirmed? callbacks.confirmed() : ()=>{}
      }else{
         callbacks.denied? callbacks.denied() : ()=>{}
      }

   })

}


export {
   warningAlert,
   errorAlert,
   successAlert,
   infoAlert,
   questionAlert,
   customAlert
}