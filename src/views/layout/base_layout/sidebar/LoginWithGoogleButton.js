import axios from "axios"
import { useEffect, useState } from "react"
import { useGoogleLogin } from '@react-oauth/google';
import sidebarStyle from './sidebar.module.scss'
import { FaGoogle } from "react-icons/fa6";

//slices
import { setAccessToken } from "../../../../store/sessionSlice";
import { setName } from "../../../../store/userSlice";

import { useSelector, useDispatch } from 'react-redux';

const LoginWithGoogleButton = props =>{
    const {expand} = props
    const access_token = useSelector((state)=>state.sessionReducer.access_token)
    const userState = useSelector((state)=>state.userReducer)
    const dispach = useDispatch()

    const login = useGoogleLogin({
        onSuccess: resp => {
            dispach(setAccessToken(resp.access_token))
        },
        isSignedIn: true
    })

    useEffect(_=>{
        if(access_token){
            axios.get(
                `https://people.googleapis.com/v1/people/me/connections`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                    params: {
                        personFields: 'names,emailAddresses,phoneNumbers,memberships', // Include memberships for group info
                    },
                }
            ).then(data=>{
                console.log(data);
            })

            //pegando os dados do usuário
            axios.get(
                `https://www.googleapis.com/userinfo/v2/me`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    }
                }
            ).then(data=>{
                console.log(data);
            })
        }
         
    },[access_token])

    return (
        <button className={sidebarStyle.buttonLoginWithGoogle}
            onClick={_=>login()}
        ><FaGoogle className="" /> {expand ? 'Entrar com Google' : ''}</button>
    )
}

export default LoginWithGoogleButton