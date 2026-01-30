import { useState,useEffect} from "react"
import { getProductos,getPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos,setProductos] = useState ([])

  const {idCategoria} = useParams ()


  useEffect (()=>{
    const funcionCategorias = idCategoria ? getPorCategoria: getProductos
    funcionCategorias (idCategoria)
    .then (respuesta => setProductos(respuesta) )
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
