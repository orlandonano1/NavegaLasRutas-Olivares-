



import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './Componentes/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext'
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
            <NavBar/>

            <Routes>
              <Route path = "/" element={<ItemListContainer/>}/>
              <Route path = "/categoria/:idCategoria" element={<ItemListContainer/>}/>
              <Route path = "/item/:idItem" element={<ItemDetailcontainer/>}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>


        </CarritoProvider>
          
          
        <ToastContainer/>

      </BrowserRouter>
   
      
    </>
  )
}

export default App