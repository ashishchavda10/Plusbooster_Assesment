import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';


function Product({id,title, image}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image
            },
        });
    }
    return (
        <div className='product'>
            <img src={image} />
            <p>{title}</p>
            <button onClick={addToBasket}>Add</button>
        </div>
    )
}

export default Product
