import React, { useState } from 'react'
import Index from './Index.css'

const Animatedlist = props => {

    const [listItem, setListItem] = useState([])



    const handleClick = () => {

        // var list = document.getElementById('animated-list-comp');
        // var newLI = document.createElement('li');
        // newLI.innerHTML = 'A new item';
        // list.appendChild(newLI);
        // console.log('wowowowo')

        setListItem([
            ...listItem,
            {
                id: listItem.length,
                value: 'New Item'
            }
        ])

    }

        return ( 
            <>
                <ul id="animated-list-comp" className="swing">
                    {listItem.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
                <button id="animated-list-component-add-button" onClick={handleClick}>{props.buttonText}</button>
            </>
        )
   
}

export default Animatedlist