import React, { useEffect, useState } from "react";
import {productos} from '../../productos/productos'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import '../../App.css';

const ItemListContainer = (greeting) => {
  const [items, setItems] = useState([]);

  const {parametro} = useParams();

  useEffect(() => {
    
    const getProducts = ()=>{
        return new Promise((res,rej)=>{
            const productosFiltrados = productos.filter(
              (productos)=>productos.categoria === parametro.nombreCategoria
              );
            const filtro= parametro.nombreCategoria ? productosFiltrados : productos;
            setTimeout(()=>{
                res(filtro);
            },1000);
        });
    };
    getProducts()
    .then((res)=>{
        setItems(res);
    })
    .catch((error)=>{
        console.log(error);
    });
  }, [parametro.nombreCategoria]);

  return (
    <div className="container">
      <h1>{greeting.title}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer