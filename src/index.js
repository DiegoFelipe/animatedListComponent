import React from 'react'
import Index from './Index.css'

const animatedlist = props => {

    handleClick = _ => {

        var list = document.getElementById('animated-list-comp');
        var newLI = document.createElement('li');
        newLI.innerHTML = 'A new item';
        list.appendChild(newLI);

    }

    
        return ( 
            <div>
                <ul id="animated-list-comp" class="swing">
                </ul>
                <button id="animated-list-component-add-button" onChange={() => handleClick()}>{props.button-text}</button>
            </div>
        )
    
}

export default animatedlist