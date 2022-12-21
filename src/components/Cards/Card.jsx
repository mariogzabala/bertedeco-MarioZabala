import React from 'react'

const Card = ({img, title , text}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={img} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="/#" className="btn btn-primary">Comprar</a>
  </div>
</div>
  )
}

export default Card