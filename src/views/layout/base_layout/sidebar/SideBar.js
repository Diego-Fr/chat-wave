import SideBarItem from "./SideBarItem"
import sidebarStyle from './sidebar.module.scss'
import SideBarLogo from "./SideBarLogo";
import ToggleButton from "./toggleButton";
import { useState } from "react";
import { FaHouse,FaCircleQuestion, FaRocketchat } from "react-icons/fa6";
import LoginWithGoogleButton from "./LoginWithGoogleButton";

const SideBar = () =>{
    const [expand, setExpand] = useState(true)

    const onClickHandler = () =>{
        setExpand(!expand)
    }


    return (
        <div className={`${sidebarStyle.sidebarContainer} ${!expand ? sidebarStyle.toggle : ''}`}>
            <SideBarLogo title='ChatWave' icon={<FaRocketchat/>} expand={expand}/>
            <SideBarItem to="/home" title={'Home'} icon={<FaHouse/>} expand={expand}/>
            <SideBarItem to="/about" title={'About'} icon={<FaCircleQuestion/>} expand={expand}/>
            <LoginWithGoogleButton expand={expand}></LoginWithGoogleButton>
            <ToggleButton onclick={_=>onClickHandler()} expand={expand}/>
        </div>
    )
}

export default SideBar