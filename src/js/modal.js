import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import React, { useState } from 'react'
import '../css/button.css'
import '../css/modal.css'
import CheckOut from './checkOut'
import { ThingsProvider } from './context'
import filterPosts from './filterHelper'
import Header from './header'
import Home from './home'
import SecondHeader from './secondHeader'



const lists = [
    {
        id: 1,
        title: "SOFTSPUN Microfiber Cloth - 4 pcs",
        image: "https://m.media-amazon.com/images/I/81gmoNbQulL._SL1500_.jpg"
    },
    {
        id: 2,
        title: "NIVEA Nourishing Lotion Body Milk",
        image: "https://m.media-amazon.com/images/I/51shDMCVn+L._SL1000_.jpg"
    },
    {
        id: 3,
        title: "Butterfly Premium Vegetable Chopper 900 Ml",
        image: "https://m.media-amazon.com/images/I/312YOAG9luL.jpg"
    },
    {
        id: 4,
        title: "GoPro HERO9 Black",
        image: "https://m.media-amazon.com/images/I/61Iyd3w+bKL._SL1500_.jpg"
    },
    {
        id: 5,
        title: "MI Wi-Fi 1080p Full HD 360°",
        image: "https://m.media-amazon.com/images/I/61JM7nC4OKL._SL1500_.jpg"
    },
    {
        id: 6,
        title: "Havells Aqua Plus 1.2 litre Double Wall Kettle",
        image: "https://m.media-amazon.com/images/I/61SBF33TizS._SL1500_.jpg"
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

    function onContinue() {
        props.continueClose(false)
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Select Products</h4>
                    <CloseOutlinedIcon onClick={props.onClose} style={{ cursor: "pointer" }} />
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
                    <button className='submit-action-button' onClick={onContinue}>Continue with selected products</button>
                    <button className='cancel-action-button' onClick={props.onClose}>Cancel</button>
                </div>

            </div>

        </div>
    )
}

export default Modal
