
import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailcontainer = () => {
     const [producto,setProducto] = useState (null)

    const {idItem}= useParams()

   
    
    useEffect (()=>{
        getUnProducto(parseInt(idItem))
        .then (respuesta=>setProducto(respuesta))
        .catch (error => console.log(error))

    },[idItem])


  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}

export default ItemDetailcontainer