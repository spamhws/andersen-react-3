import React, { useEffect, useState } from 'react';
import styles from './InputBlock.module.css';

export default function InputBlock(props) {
  const [inputValue, setInputValue] = useState('');
  const [currentError, setCurrentError] = useState(`Field can't be empty`);

  function modifyParentState(error) {
    props.onInputChange(props.formName, {
      error: Boolean(error),
      value: inputValue.trim(),
    });
  }

  function textareaChange(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    let error = '';

    if (props.formName === 'website') {
      if (!(inputValue.indexOf('https://') === 0)) {
        error = `Must start with 'https://'`;
      }
    } else if (props.formName === 'phone') {
      if (inputValue.length > 12) {
        error = `Max 12 characters allowed`;
      } else if (!/[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(inputValue)) {
        error = `Please use the correct format: 1-2345-67-89`;
      }
    } else if (props.type === 'input' && inputValue[0] === inputValue[0]?.toLowerCase()) {
      error = `Must start with an uppercase letter`;
    } else if (props.type === 'textarea' && inputValue.length > 600) {
      error = `You have exceeded the symbol limit`;
    }

    if (inputValue.length === 0) {
      error = `Field can't be empty`;
    }

    setCurrentError(error);
    modifyParentState(error);
  }, [currentError, inputValue]);

  if (props.type === 'input') {
    let showError = currentError && props.error;

    return (
      <label htmlFor={props.formName}>
        <p>{props.label}</p>
        <input
          onChange={textareaChange}
          value={inputValue}
          type='text'
          name={props.formName}
          placeholder={props.placeholder}
        />

        <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{currentError}</p>
      </label>
    );
  } else {
    let showError = inputValue.length > 600 || (props.error && currentError);

    return (
      <label htmlFor={props.formName}>
        <p>{props.label}</p>
        <textarea
          onChange={textareaChange}
          name={props.formName}
          rows='7'
          placeholder={props.placeholder}
          value={inputValue}
        ></textarea>

        <p className={`${styles.textCounter} ${showError ? styles.hidden : ''}`}>
          {600 - inputValue.length}/600 symbols left
        </p>
        <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{currentError}</p>
      </label>
    );
  }
}
