import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='containerDetail'>
      <img src={item.img} alt="unafoto" />

      <article>
        <h2>{item.titulo}</h2>
        <section>
          <h3>${item.precio}</h3>
        </section>

        <section>
          <p>{item.descripcion}</p>
        </section>
      </article>
    </div>
  )
}
export default ItemDetail