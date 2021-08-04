import React from 'react'
import './Modal.css'
import Header from './Header'
import Home from './Home'
import SecondHeader from './SecondHeader'
import CheckOut from './ChekOut'

function Modal(props) {
    if(!props.show){
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Modal Title</h4>
                </div>
                <div className='modal-body'>
                    <div className='body__firstDivision'>
                    <Header />
                   <Home />
                    </div>
                    <div className='body__secondDivision'>
                    <SecondHeader />
                    <CheckOut />
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className='button' >Continue selected</button>
                    <button className='button'onClick={props.onClose}>Cancel</button>
                </div>

            </div>
            
        </div>
    )
}

export default Modal
