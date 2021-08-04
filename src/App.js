import React, {useState} from 'react';
import './App.css';
import Modal from './Modal'



function App() {

  const [show, setShow] = useState(false);

  return (
    <div className='app'>
      <button onClick={() => setShow(true)}>Sho Modal</button>
      <Modal show={show} onClose={() => setShow(false)}/>
    </div>
  )
}
export default App;
