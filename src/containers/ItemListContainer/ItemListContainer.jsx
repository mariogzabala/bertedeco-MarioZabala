import React from 'react'
import Card from '../../components/Cards/Card'
import banco from '../../assets/img/cards-img/banco.jpg';
import mesita from '../../assets/img/cards-img/mesita.jpg';
import silla from '../../assets/img/cards-img/silla.jpg';
import './styles.css';

const ItemListContainer = (props) => {
  return (
    <div>
      {props.greeting}
      <div className='card-list-container'>
      <Card title={"Mesa"} text={"Madera y Hierro"} img = {mesita} />
      <Card title={"Silla"} text={"Madera maciza"} img={silla} />
      <Card title={"Banco"} text={"Madera maciza"} img = {banco}/>
      </div>
    </div>
  )
}

export default ItemListContainer