import SideBarItem from "./SideBarItem"
import sidebarStyle from './sidebar.module.scss'
import SideBarLogo from "./SideBarLogo";
import ToggleButton from "./toggleButton";
import { useState } from "react";
import { FaHouse,FaCircleQuestion, FaRocketchat, FaAddressBook  } from "react-icons/fa6";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import { useTranslation } from "react-i18next";

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
            <ToggleButton onclick={_=>onClickHandler()} expand={expand}/>
        </div>
    )
}

export default SideBar