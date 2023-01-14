import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
  return (
    <div className='itemList'>
      {items.map((producto)=>{
        return <Item producto={producto} key={producto.id}></Item>
      })}
    </div>
  )
}
