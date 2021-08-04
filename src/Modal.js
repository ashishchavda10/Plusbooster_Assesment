import React, { useState } from 'react'
import './button.css'
import CheckOut from './ChekOut'
import { ThingsProvider } from './context'
import filterPosts from './filter_helper'
import Header from './Header'
import Home from './Home'
import './Modal.css'
import SecondHeader from './SecondHeader'



const lists = [
    {
        id: 1,
        title: "Jeans",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    },
    {
        id: 2,
        title: "Pants",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    },
    {
        id: 3,
        title: "Pocket",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    },
    {
        id: 4,
        title: "Pencil",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    },
    {
        id: 5,
        title: "Compass",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    },
    {
        id: 6,
        title: "Box",
        image: "https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
    }
]


function Modal(props) {


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredLists = filterPosts(lists, searchQuery);

    if (!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Select Products</h4>
                </div>
                <div className='modal-body'>
                    <div className='body__firstDivision'>
                        <Header
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        <ThingsProvider value={filteredLists}>
                            <Home />
                        </ThingsProvider>

                    </div>
                    <div className='body__secondDivision'>
                        <SecondHeader />
                        <CheckOut />
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className='submit-action-button' >Continue with selected products</button>
                    <button className='cancel-action-button' onClick={props.onClose}>Cancel</button>
                </div>

            </div>

        </div>
    )
}

export default Modal
