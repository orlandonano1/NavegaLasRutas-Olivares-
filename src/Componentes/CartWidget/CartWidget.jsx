
import  "./CartWidget.css"

const CartWidget = () => {

    const imagenCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

  return (
    <div>
        <img className="imgCarrito" src={imagenCarrito} alt="imagen de carrito" />
    </div>
  )
}

export default CartWidget