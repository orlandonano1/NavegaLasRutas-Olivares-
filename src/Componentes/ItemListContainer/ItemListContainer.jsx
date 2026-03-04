import { useState,useEffect} from "react"

import ItemList from "../ItemList/ItemList"
import {  useParams } from "react-router-dom"
import { db } from "../../servise/config"
import { collection,doc,getDocs,query,where } from "firebase/firestore"

const ItemListContainer = () => {

  const [productos,setProductos] = useState ([])
  const [loading,setLoading] = useState (false)


  const {idCategoria} = useParams ()

  useEffect(()=>{

    setLoading(true)

    const misProductos = idCategoria ? query(collection(db,"ProductosMando"), where("idTipoProducto", "==", idCategoria)) : collection(db,"ProductosMando")
   
    getDocs(misProductos)
    .then(respuesta =>{
      const nuevosProductos = respuesta.docs.map(doc=>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos)

    })
    .catch (error => console.log(error))
    


  },[idCategoria])


  

  return (
    <>
      <h2>Productos</h2>
      <ItemList productos = {productos}/>
      

      

    </>
  )
}

export default ItemListContainer
