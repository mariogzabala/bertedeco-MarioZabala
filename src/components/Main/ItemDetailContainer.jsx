import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productos/productos";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const parametro = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((res, rej) => {
        const productoFiltrado = productos.find(
          (prod) => prod.id === parseInt(parametro.id)
        );
        setTimeout(() => {
          res(productoFiltrado);
        }, 2000);
      });
    };
    getProduct()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
