import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../servise/config"
import { collection,addDoc, updateDoc,doc,getDoc } from "firebase/firestore"

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email, setEmail] = useState("'");
    const [emailConfirmacion, setEmailConfirmacion] = useState();
    const [error,setError] = useState("'");
    const [ordenId,setOrdenId] =useState("");

    const {carrito, vaciarCarrito, total} =useContext(CarritoContext)


    const manejadorFormulario = (event)=> {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion )
            {setError ("Completar todos los Campos para poder continuar")
            return 
        
        }

        if (email !== emailConfirmacion){
            setError ("No Coinciden los campos")
            return
        }


        const orden ={
            item: carrito.map(producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),

            total: total,
            fecha: new Date (),
            nombre,
            apellido,
            telefono,
            email

        }

        Promise.all(
            orden.item.map( async(productoOrden)=>{
                const productoRef = doc(db, "ProductosMando", productoOrden.id)
                const productoDoc = await getDoc (productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc (productoRef,{
                    stock: stockActual - productoOrden.cantidad
                })


            })
        )

        .then(()=>{

             addDoc(collection(db,"ordenes"),orden)
                .then(docRef => {
                    setOrdenId(docRef.id)
                    vaciarCarrito()
        })
        .catch(error=>{
            console.log("Error al crear orden", error)
            setError("Se produjo un error al crear pedido")
        })
              


        })



       


    }

       


  return (
    <div>
        <h2>Checkout:</h2>
        <form onSubmit={manejadorFormulario}>
          {
          carrito.map(producto =>(
            <div key={producto.item.id}>
                <p>{producto.item.nombre} x {producto.cantidad}</p>
                <p>{producto.item.precio}</p>
            </div>

          ))

          }  

          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange= {(e)=> setNombre(e.target.value)}/>

          </div>
          <div>
            <label htmlFor="">Apellido</label>
            <input type="text" onChange= {(e)=> setApellido(e.target.value)}/>

          </div>
          <div>
            <label htmlFor="">Telefono</label>
            <input type="text" onChange= {(e)=> setTelefono(e.target.value)}/>

          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="Email"onChange= {(e)=> setEmail(e.target.value)} />

          </div>
          <div>
            <label htmlFor="">Email Confirmacion</label>
            <input type="Email" onChange= {(e)=> setEmailConfirmacion(e.target.value)}/>

          </div>

          {
            error && <p style={{color: "red"}}></p>
          }

          <button type="submil">Confirmar Compra</button>

          {
            ordenId && (
                <strong>Gracias por su compra! Este es tu numero de orden: {ordenId}</strong>
            )
          }


        </form>


    </div>
  )
}

export default Checkout