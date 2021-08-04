import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image }) {
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
        <div className='product-item-container'>
            <div className='image-container'>
                <img src={image} />
            </div>
            <p className='product-title'>{title}</p>
            <AddCircleOutlineIcon onClick={addToBasket} />
        </div>
    )
}

export default Product
