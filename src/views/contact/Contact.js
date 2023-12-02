import { Card } from "flowbite-react"
import { useSelector } from "react-redux"
import ListItem from "../../components/list_group/list_item/ListItem"
import style from './contact.module.css'
import Pagination from "../../components/pagination/Pagination"
import { useState } from "react"

const Contact = _ =>{
    
    const contactState = useSelector(state=>state.contactReducer)
    const [qtdPage, setQtdPage] = useState(10)
    const [page, setPage] = useState(1)

    const clickHandler = props =>{
        let {page, size} = props
        setPage(page)
        setQtdPage(qtdPage)
    }

    return (
        <Card>
            <div>SUA LISTA DE CONTATOS</div>
            <div className={style.contactListContainer}>
                {contactState.list.map((contact,index)=>(
                    (page * qtdPage - qtdPage <= index+1 && page * qtdPage >= index+1) && (
                        <div key={index+1}>
                            <ListItem contact={contact} indexKey={index+1}/>
                        </div>
                    ) 
                ))}
            </div>
            <div>
                <Pagination clickHandler={clickHandler} qtdPage={qtdPage}/>
            </div>
        </Card>
    )
}

export default Contact