import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import clientAxios from '../../configs/clientAxios'
import { LOCAL_STORAGE_KEY } from '../../constants/constants'
import { getToken } from '../../services/getToken'
import { useAppSelector } from '../../store'
import { logIN } from '../AuthSlice/AuthSlice'

const CheckLogStatusHook = (): void => {
  const dispatch = useDispatch()
  const { logged } = useAppSelector(({ Auth }) => Auth)
  useEffect(() => {
    const userJSON = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (userJSON) {
      const user = JSON.parse(userJSON)
      dispatch(logIN(user))

      //I add the token to the axios header
      clientAxios.defaults.headers.common['authorization'] =
        getToken().headers.Authorization
    } else {
      //if there is no token I remove the header
      delete clientAxios.defaults.headers.common['authorization']
    }
  }, [logged])
}

export default CheckLogStatusHook

//client localhost://
//agregue al header

//hacemos
