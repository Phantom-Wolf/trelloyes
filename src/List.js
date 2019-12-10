import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) {
    return (
    <section className='List'>
        <header className='List-header'>
            <h3>{props.header}</h3>
        </header>
        <div>
            {props.cards.map((card)=>
                <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                />      
            )}
            <button 
                type='button'
                className='List-add-button'
            >
            +add Random Card
            </button>
        </div>
    </section>
    )
}

