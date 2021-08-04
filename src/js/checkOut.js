import React from 'react';
import '../css/home.css';
import Checkproduct from './checkProduct';
import { useStateValue } from './stateProvider';

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
