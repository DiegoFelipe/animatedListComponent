import React from 'react'
import Index from './Index.css'

const Animatedlist = props => {

    const handleClick = _ => {

        var list = document.getElementById('animated-list-comp');
        var newLI = document.createElement('li');
        newLI.innerHTML = 'A new item';
        list.appendChild(newLI);
        console.log('wowowowo')

    }

        return ( 
            <div>
                <ul id="animated-list-comp" className="swing">
                </ul>
                <button id="animated-list-component-add-button" onClick={handleClick}>{props.buttonText}</button>
            </div>
        )
   
}

export default Animatedlist