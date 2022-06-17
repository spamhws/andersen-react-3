import React from 'react';
import styles from './InputBlock.module.css';

class InputBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', currentError: this.error1 };

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

    if (this.props.formName === 'website') {
      if (!(this.state.inputValue.indexOf('https://') === 0)) {
        error = `Must start with 'https://'`;
      }
    } else if (this.props.formName === 'phone') {
      if (this.state.inputValue.length > 12) {
        error = `Max 12 characters allowed`;
      } else if (!/[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(this.state.inputValue)) {
        error = `Please use the correct format: 1-2345-67-89`;
      }
    } else if (this.props.type === 'input' && this.state.inputValue[0] === this.state.inputValue[0]?.toLowerCase()) {
      error = `Must start with an uppercase letter`;
    } else if (this.props.type === 'textarea' && this.state.inputValue.length > 600) {
      error = `You have exceeded the symbol limit`;
    }

    if (this.state.inputValue.length === 0) {
      error = `Field can't be empty`;
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

  componentDidUpdate() {}

  render() {
    if (this.props.type === 'input') {
      let showError = this.state.currentError && this.props.error;

      return (
        <label htmlFor={this.props.formName}>
          <p>{this.props.label}</p>
          <input
            onChange={this.textareaChange}
            value={this.state.inputValue}
            type='text'
            name={this.props.formName}
            placeholder={this.props.placeholder}
          />

          <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{this.state.currentError}</p>
        </label>
      );
    } else {
      let showError = this.state.inputValue.length > 600 || (this.props.error && this.state.currentError);

      return (
        <label htmlFor={this.props.formName}>
          <p>{this.props.label}</p>
          <textarea
            onChange={this.textareaChange}
            name={this.props.formName}
            rows='7'
            placeholder={this.props.placeholder}
            value={this.state.inputValue}
          ></textarea>

          <p className={`${styles.textCounter} ${showError ? styles.hidden : ''}`}>
            {600 - this.state.inputValue.length}/600 symbols left
          </p>
          <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{this.state.currentError}</p>
        </label>
      );
    }
  }
}

export default InputBlock;
