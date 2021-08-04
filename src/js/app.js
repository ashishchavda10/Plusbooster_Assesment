import React, { useState } from 'react';
import '../css/app.css';
import '../css/button.css';
import Modal from './modal';
import { useStateValue } from './stateProvider';

let selectedItem = []

function App() {

  const [show, setShow] = useState(false);
  const [{ basket }, dispatch] = useStateValue();


  function resetValuesOnClose() {

    setShow(false);
    if (selectedItem.length <= 0) {
      dispatch({ type: 'REMOVE_ALL' })
    }
  }

  function handleCallback(childdata) {
    setShow(childdata);
    selectedItem = basket

  }

  return (
    <div>
      <button className='select-product-button' onClick={() => setShow(true)}>Select Products</button>
      <h2 className='vertical-center'>Selected Products ({basket.length})</h2>
      <Modal show={show} onClose={() => resetValuesOnClose()} continueClose={handleCallback} />
    </div>

  )
}
export default App;
