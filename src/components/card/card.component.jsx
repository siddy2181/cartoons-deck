import React from 'react'
import './card.css'


export const Card = (props) => (
  <div className='card-container'>
    <img
      alt='Cartoon'
      src={`https://robohash.org/${props.cartoon.id}?set=set2&size=180x180`}
    />
    <h2>{props.cartoon.name}</h2>
    <p>{props.cartoon.email}</p>
  </div>
)