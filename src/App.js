import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";
import Carrito from "./components/Main/Carrito";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>    
          <Route path='/' element={<ItemListContainer title='BERTEDECO TIENDA ONLINE'/>}/>
          <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito title='Carrito'/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
