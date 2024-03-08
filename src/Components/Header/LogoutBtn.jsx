import React, { useState }  from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../Store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
      const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((error) => ("Something went wrong::", error));
        navigate('/')
      }
   

  return (
    <button 
   
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-black rounded-full'
    onClick={logoutHandler}
    
    >Logout</button>
  )
}


export default LogoutBtn