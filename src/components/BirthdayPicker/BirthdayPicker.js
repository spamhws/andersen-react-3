import React from 'react';
import styles from './BirthdayPicker.module.css';

class BirthdayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', currentError: 'Please choose date' };
    this.setCurrentError = this.setCurrentError.bind(this);
    this.textareaChange = this.textareaChange.bind(this);
    this.modifyParentState = this.modifyParentState.bind(this);
  }

  textareaChange(event) {
    this.setState({ inputValue: event.target.value }, () => {
      this.setCurrentError();
    });
  }

  setCurrentError() {
    let error = '';

    if (this.state.inputValue === '') {
      error = 'Please choose date';
    }

    this.setState({ currentError: error }, () => {
      this.modifyParentState();
    });
  }

  modifyParentState() {
    this.props.callback(this.props.formName, {
      error: Boolean(this.state.currentError),
      value: this.state.inputValue.trim(),
    });
  }

  componentDidMount() {
    this.setCurrentError();
  }

  render() {
    let showError = this.state.currentError && this.props.error;
    return (
      <label htmlFor='birthday'>
        <p>Date of birth:</p>
        <input
          onChange={this.textareaChange}
          type='date'
          name='birthday'
          min='1800-01-01'
          max={new Date().toISOString().split('T')[0]}
        />
        <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{this.state.currentError}</p>
      </label>
    );
  }
}

export default BirthdayPicker;
