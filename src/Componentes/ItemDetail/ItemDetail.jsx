
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"


import { useContext } from "react"
import { toast } from "react-toastify"


const ItemDetail = ({id,nombre,precio,img,stock}) => {

  const[agregarCantidad,setAgregarCantidad]=useState(0)

  const{ agregarAlcarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad)
    


    const item = {id, nombre, precio}
    agregarAlcarrito(item,cantidad)
    
    toast.success("Agregado",{
      autoClose : 5000, theme :"ligth",position: "top-center",


    })
   
    

  }


  return (
    <div className="contenedorItem">
        <h2>Nombre:{nombre}</h2>
        <h3>Precio:{precio}</h3>
        <h3>ID:{id}</h3>
        <img src={img} alt={nombre} />
        <p>Mando para gato barato</p>


        {agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>):(<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}
    </div>
  )
}

export default ItemDetail