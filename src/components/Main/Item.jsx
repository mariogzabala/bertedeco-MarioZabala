import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({producto}) {
  return (
    <div className='item'>
      <img className= 'imgItem' src={producto.img} alt={producto.titulo}/>
      <div className='cardData'>
        <h2>{producto.titulo}</h2>
        <span className='cardPrecio'>${producto.precio}</span>
        <Link to={`/detalle/${producto.id}`}>Ver Mas</Link>
      </div>
    </div>
  )
}
