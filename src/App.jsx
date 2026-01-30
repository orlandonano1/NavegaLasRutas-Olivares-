

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

import NavBar from './Componentes/NavBar/NavBar'
import ItemDetailcontainer from './Componentes/ItemDetailContainer/ItemDetailcontainer'
import { Routes,Route,BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
          <NavBar/>

          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path = "/item/:idItem" element={<ItemDetailcontainer/>}/>
            
          </Routes>

          
           

      </BrowserRouter>
   
      
    </div>
  )
}

export default App