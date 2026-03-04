
import { useEffect, useState } from "react"

import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../servise/config"
import { getDoc, doc } from "firebase/firestore"







const ItemDetailcontainer = () => {
     const [producto,setProducto] = useState (null)

    const {idItem}= useParams()

    useEffect (()=>{
      const nuevoDoc = doc(db,"ProductosMando", idItem)
      getDoc(nuevoDoc)
      .then(respuesta => {
        const data = respuesta.data()
        const nuevosProducto = {id: respuesta.id, ...data}
        setProducto(nuevosProducto)
      })
      .catch(error => console.log(error))


    },[idItem])
    
    

  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}

export default ItemDetailcontainer