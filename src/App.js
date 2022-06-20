import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Modal from './components/Modal/Modal.js';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [state, setState] = useState({ displayModal: false });

  function updateModal(formValues) {
    setState((prevState) => ({
      ...prevState,
      values: formValues,
      displayModal: true,
    }));
  }

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Form updateModal={updateModal} />}></Route>
        <Route exact path='/result' element={<Modal values={state.values} />}></Route>
      </Routes>
    </div>
  );
}
