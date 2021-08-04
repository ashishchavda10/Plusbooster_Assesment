import React, { useContext } from 'react';
import ThingsContext from './context';
import './Home.css';
import Product from './Product';

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