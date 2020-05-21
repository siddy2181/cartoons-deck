import React from 'react';
import { Card } from '../card/card.component'
import './card-list.css';

export const CardList = (props) => {

    return <div className='card-list'>{props.cartoons.map(
        cartoon => ( <Card key={cartoon.id} cartoon ={cartoon} />)
        )}</div>
}