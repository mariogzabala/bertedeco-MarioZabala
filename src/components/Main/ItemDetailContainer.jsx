import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../data/productos";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const parametro = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((res, rej) => {
        const productoFiltrado = productos.find(
          (productos) => productos.id === parseInt(parametro.id)
        );
        setTimeout(() => {
          res(productoFiltrado);
        }, 1000);
      });
    };
    getProduct()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },[parametro.id]);

  return <ItemDetail item={item} />;
};

