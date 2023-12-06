import SideBarItem from "./SideBarItem"
import sidebarStyle from './sidebar.module.scss'
import SideBarLogo from "./SideBarLogo";
import ToggleButton from "./toggleButton";
import { useEffect, useState } from "react";
import { FaHouse,FaCircleQuestion, FaRocketchat, FaAddressBook  } from "react-icons/fa6";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import { useTranslation } from "react-i18next";
// import Social from "./Social";
import OAuth2Login from 'react-simple-oauth2-login';
import { Button } from "flowbite-react";
import axios from "axios";
import UserOptions from "./user_options/UserOptions";


const SideBar = () =>{
    const [expand, setExpand] = useState(true)
    const {t} = useTranslation()

    const onClickHandler = () =>{
        setExpand(!expand)
    }

    return (
        <div className={`${sidebarStyle.sidebarContainer} ${!expand ? sidebarStyle.toggle : ''}`}>
            <SideBarLogo title='ChatWave' icon={<FaRocketchat/>} expand={expand}/>
            <SideBarItem to="/home" title={'home'} icon={<FaHouse/>} expand={expand}/>
            <SideBarItem to="/about" title={t('about')} icon={<FaCircleQuestion/>} expand={expand}/>
            <SideBarItem to="/contact" title={t('contacts')} icon={<FaAddressBook />} expand={expand}/>
            <LoginWithGoogleButton expand={expand}></LoginWithGoogleButton>
            <UserOptions expand={expand}/>
            <ToggleButton onclick={_=>onClickHandler()} expand={expand}/>
        </div>
    )
}

export default SideBar