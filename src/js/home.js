import React, { useContext } from 'react';
import '../css/home.css';
import ThingsContext from './context';
import Product from './product';

function Home() {

    const things = useContext(ThingsContext);
    const renderThings = things => {

        return things.map(thing => {
            return <Product
                id={thing.id}
                title={thing.title}
                image={thing.image}

            />
        });
    }
    return (
        <div className='home'>
            {renderThings(things)}
        </div>
    )



}
export default Home