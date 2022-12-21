import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>    
      <ItemListContainer greeting='Este es el Greeting'/>  
    </div>
  );
}

export default App;
