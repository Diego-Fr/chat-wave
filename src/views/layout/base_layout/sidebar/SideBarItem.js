
import { Link } from 'react-router-dom'
import sidebarStyles from './sidebar.module.scss'

const SideBarItem = props =>{
    const {icon, title, expand} = props

    return (
        <Link to={props.to} className={sidebarStyles.sidebarItem}>
            {icon}  {expand ? title : ''}
        </Link>
    )
}

export default SideBarItem