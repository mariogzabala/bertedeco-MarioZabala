import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) =>{
  return (
    <div className='item'>
      <img className= 'imgItem' src={producto.img} alt={producto.titulo}/>
      <div className='cardData'>
        <h2>{producto.titulo}</h2>
        <span className='cardPrecio'>${producto.precio}</span>
        <Link to={`/detalle/${producto.id}`} className="btn btn-primary">Ver Mas</Link>
      </div>
    </div>
  )
}
export default Item
