import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./style/app.css"
import Cart from "./components/Cart"


const App = () => {

  return (
    <BrowserRouter>
      {<ChakraProvider />}
      {<NavBar />}

      <Routes>
        <Route exact path="/" element={<ItemListContainer />}> </Route>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />}></Route>
        <Route exact path="/producto/:productoId" element={<ItemDetailContainer />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App