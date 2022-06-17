import React from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Modal from './components/Modal/Modal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayModal: false };
    this.updateModal = this.updateModal.bind(this);
  }

  updateModal(formValues) {
    this.setState({ values: formValues, displayModal: true });
  }

  render() {
    return (
      <div className='App'>
        <Form displayModal={this.state.displayModal} updateModal={this.updateModal} />
        <Modal displayModal={this.state.displayModal} values={this.state.values} />
      </div>
    );
  }
}

export default App;
