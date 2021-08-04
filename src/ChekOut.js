import React from 'react';
import Checkproduct from './Checkproduct';
import './Home.css';
import { useStateValue } from './StateProvider';

function ChekOut() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='home'>
            {basket.map((item) => (
                <Checkproduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                />
            )).reverse()}

        </div>
    )
}

export default ChekOut
