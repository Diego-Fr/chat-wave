
import sidebarStyles from './sidebar.module.scss'
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa6";

const ToggleButton = props =>{
    return (
        <button onClick={props.onclick} className={sidebarStyles.toggleButton}>
            {props.expand ? <FaChevronLeft/> : <FaChevronRight/>}
        </button>
    )
}

export default ToggleButton