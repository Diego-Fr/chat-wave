import { useState } from 'react';
import listitemStyle from './listitem.module.scss'
import { FaCircleCheck , FaSquareCheck,FaRegSquare    } from "react-icons/fa6";

const ListItem = props =>{
    
    const [selected, setSelected] = useState(true)
    const {contact} = props
    const {displayName} = contact.names[0]
    const phoneNumber = contact.phoneNumbers[0].value

    const formatNumber = number =>{
        let number_alt = number.replaceAll('-','').replaceAll(' ', '').replaceAll('+', '')
        if(number_alt.length == 13){//formato 55119...
            return `(${number_alt.substring(2,4)}) ${number_alt.substring(4,9)}-${number_alt.substring(9,13)}`
        } else if(number_alt.length == 11){
            return `(${number_alt.substring(0,2)}) ${number_alt.substring(2,7)}-${number_alt.substring(7,11)}`
        } else if(number_alt.length == 9){
            return `${number_alt.substring(0,5)}-${number_alt.substring(5,9)}`
        }
        return number
    }

    const clickHandler = _ =>{
        setSelected(!selected)
    }

    return (
        <div className={`${listitemStyle.listItemContainer} ${selected ? listitemStyle.selected : ''}`} onClick={_=>clickHandler()}>
            <div>{displayName.toUpperCase()}</div>
            <div>{formatNumber(phoneNumber)}</div>
            <div>{selected ? <FaSquareCheck size={20}/> : <FaRegSquare size={20}/>}</div>
        </div>
    )
}

export default ListItem