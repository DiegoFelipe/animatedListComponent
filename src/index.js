import React, { useState, useEffect } from 'react'
import Index from './Index.css'

const Animatedlist = (props) => {

    const [items, setItems] = useState([])

    const addItem = () => {

         setItems([
            ...items,
            {
                id: items.length,
                value: 'New Item'+items.length,
                class: ''
            }
        ])

        setTimeout(() => {
            // newItems = [...items]
            // newItems[newItems.length - 1].class = 'show'
            // setItems(newItems)
            // if(items.length == 1) {
            //     setTimeout(() => {
            //         items[0].class='show'
            //     },1)
            // }
            console.log(items.length, items[0].class, 'piroca')
            items[items.length-1].class = 'show'
            // if(items[items.length-1].class != 'show')
            // setItems(items)
            console.log('inside additem')
        }, 10)
    
    }

    // useEffect(() => {
    //     console.log('before timeout')
    //     if(items.length > 0)
    //         // setTimeout(() => {
    //         //     // newItems = [...items]
    //         //     // newItems[newItems.length - 1].class = 'show'
    //         //     // setItems(newItems)
    //         //     // if(items.length == 1) {
    //         //     //     setTimeout(() => {
    //         //     //         items[0].class='show'
    //         //     //     },1)
    //         //     // }
    //         //     console.log(items.length, items[0].class, 'piroca')
    //         //     items[items.length-1].class = 'show'
    //         //     // if(items[items.length-1].class != 'show')
    //         //     // setItems(items)
    //         //     // console.log('inside effect')
    //         // }, 10)
    // })

        return ( 
            <>
                <button onClick={() => addItem()}>{props.buttonText}</button>
                <ul className="swing">
                    {items.map(item => { return <li className={item.class} key={item.id}> {item.value} </li> })}
                </ul>
                
            </>
        )
   
}

export default Animatedlist