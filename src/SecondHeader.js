import React from 'react'
import './button.css'
import './SecondHeader.css'
import { useStateValue } from './StateProvider'

function SecondHeader() {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVEALL"
        })
    }

    return (
        <div className='secondHeader'>
            <h4>Selected Products</h4>
            <button className='remove-all-button' onClick={removeFromBasket}>Remove All</button>
        </div>
    )
}

export default SecondHeader
