import React from 'react'
import '../css/button.css'
import '../css/secondHeader.css'
import { useStateValue } from './stateProvider'

function SecondHeader() {

    const [{ basket }, dispatch] = useStateValue()


    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_ALL"
        })
    }


    return (
        <div className='secondHeader'>
            <h4>Selected Products ({basket.length})</h4>
            <button className='remove-all-button' onClick={removeFromBasket}>Remove All</button>
        </div>
    )
}

export default SecondHeader
