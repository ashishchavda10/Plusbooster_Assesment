import React from 'react'
import {useStateValue} from './StateProvider'

function Checkproduct({id, image, title}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
            })
    }

    return (
        <div>
            <img src={image} />
            <p>{title}</p>
            <button onClick={removeFromBasket}>Remove</button>
        </div>
    )
}

export default Checkproduct
