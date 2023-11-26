
import sidebarStyles from './sidebar.module.scss'

const SideBarLogo = props =>{
    const {title, icon, expand} = props
    return (
        <div className={sidebarStyles.sidebarLogo}>
            {icon} {expand? title : ''}
        </div>
    )
}

export default SideBarLogo