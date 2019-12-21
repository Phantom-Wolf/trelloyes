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
                    id={card.id}
                    listId={props.id}
                    title={card.title}
                    content={card.content}
                    onDeleteItem={props.onDeleteItem}
                />      
            )}
            <button 
                type='button'
                className='List-add-button'
                onClick={() => props.onAddCard(props.id)}
            >
            +add Random Card
            </button>
        </div>
    </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {},
}

