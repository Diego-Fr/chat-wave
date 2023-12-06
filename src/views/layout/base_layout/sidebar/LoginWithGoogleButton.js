import axios from "axios"
import { useEffect, useState } from "react"
import { useGoogleLogin } from '@react-oauth/google';
import sidebarStyle from './sidebar.module.scss'
import { FaGoogle } from "react-icons/fa6";

//slices
import { setAccessToken } from "../../../../store/sessionSlice";
import { setList } from "../../../../store/contactSlice";
import { setUser } from "../../../../store/userSlice";

import { useSelector, useDispatch } from 'react-redux';

const LoginWithGoogleButton = props =>{
    const {expand} = props
    const [access_token, setAccessToken] = useState()
    const userState = useSelector((state)=>state.userReducer)
    const dispach = useDispatch()

    const login = () =>{
        window.open("https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000&prompt=consent&response_type=code&client_id=927584226883-vmkguc323h41v85ghi943c67i0qeo0go.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.other.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdirectory.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.addresses.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.birthday.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.emails.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.gender.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.organization.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.phonenumbers.read+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline",'_self', 'width=500,height=600')
    }

    const getTokenFromStorage = _ =>{
        return window.localStorage.getItem('access_token')
    }

    const addToStorage = (key, value) =>{
        window.localStorage.setItem(key, value)
    }
    const removeFroMStorage = key =>{
        window.localStorage.removeItem(key)
    }

    useEffect(_=>{
        if(!access_token){
            let token = getTokenFromStorage()
            if(token){
                setAccessToken(token)
            } else {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                
                let code = urlParams.get('code');

                if(code){
                    axios.get(`http://localhost:4000/googleLogin?code=${code}`).then(data=>{
                        let access_token = data.data.access_token
                        addToStorage('access_token',access_token)
                        setAccessToken(access_token)
                    }).catch(err=>{
                        //acho que aqui vai ter que dar redirect
                        console.log(err);
                    })
                }
            }
        }
    },[])

    useEffect(_=>{
        if(access_token){
            axios.get(
                `https://people.googleapis.com/v1/people/me/connections`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                    params: {
                        personFields: 'names,emailAddresses,phoneNumbers,memberships,addresses', // Include memberships for group info
                    },
                }
            ).then(data=>{
                dispach(setList(data.data.connections))
            }).catch(err=>{
                if(err.response.status === 401){ //chave provavelmente expirou
                    setAccessToken(undefined)
                    removeFroMStorage('access_token')
                }
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
                dispach(setUser(data.data))
            }).catch(err=>{
                if(err.response.status === 401){ //chave provavelmente expirou
                    setAccessToken(undefined)
                    removeFroMStorage('access_token')
                }
            })
        }
         
    },[access_token])

    return (
        !access_token && (<button className={sidebarStyle.buttonLoginWithGoogle}
            onClick={_=>login()}
        ><FaGoogle className="" /> {expand ? 'Entrar com Google' : ''}</button>)
    )
}

export default LoginWithGoogleButton