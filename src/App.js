import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h2>Enlace no encontrado</h2>} />
        {/* <Route path='/' element={<ItemDetailContainer />} /> */}
      </Routes>
    </BrowserRouter>

  )

}

export default App;
