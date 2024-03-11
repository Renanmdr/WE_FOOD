import api from '../utils/api'

//import { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'

// hooks
import { useFlashMessage } from './useFlashMessage'

export function useAuth(){
  const { setFlahMessage } = useFlashMessage()
    async function register(user){
      let msgText = 'Cadastro realizado com sucesso!'
      let msgType = 'success'
      try {
        const data =  await api.post('users/register', user).then((response) => {
            return response.data
        })
        console.log(data)
      } catch (error) {
        msgText = error.response.data.message 
        msgType = 'error'
      }

      setFlahMessage(msgText, msgType)
    }

    return {register}
}