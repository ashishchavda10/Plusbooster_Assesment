import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import React from 'react';
import { useStateValue } from './StateProvider';

function Checkproduct({ id, image, title }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className='product-item-container'>
            <div className='image-container'>
                <img src={image} />
            </div>
            <p className='product-title'>{title}</p>
            <DeleteOutlineOutlinedIcon onClick={removeFromBasket} />
        </div>
    )
}

export default Checkproduct
