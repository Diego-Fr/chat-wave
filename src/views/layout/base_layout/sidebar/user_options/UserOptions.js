import { useSelector } from 'react-redux'
import style from './style.module.scss'
import store from '../../../../../store/store'
import Button from './Button'
import { AiOutlineLogout } from "react-icons/ai";


const UserOptions = props =>{
    const userState = useSelector((state)=>state.userReducer.data)
    console.log(userState);
    return (
        <>
            <div className={style.userOptionsContainer}>
                <img className={style.avatarImage} src={userState.picture}></img>{ props.expand && userState.name }
                <Button text={`Sair`} icon={<AiOutlineLogout/>} expand={props.expand}/>
            </div>
        </>
    )
}

export default UserOptions