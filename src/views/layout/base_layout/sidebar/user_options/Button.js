import style from './style.module.scss'

const Button = props =>{
    console.log(props.expand);
    return (
        <div className={style.buttonContainer}>
            <a className={style.buttonLogout}>
                {props.expand && <div>{props.text}</div> }
                <div>{props.icon}</div>
            </a>
        </div>
    )
}

export default Button