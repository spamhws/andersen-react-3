import React, { useEffect, useState } from 'react';
import styles from './BirthdayPicker.module.css';

export default function BirthdayPicker(props) {
  const [inputValue, setInputValue] = useState('');
  const [currentError, setCurrentError] = useState('Please choose date');

  function modifyParentState() {
    props.onInputChange(props.formName, {
      error: Boolean(currentError),
      value: inputValue.trim(),
    });
  }

  function textareaChange(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    let error = '';

    if (inputValue === '') {
      error = 'Please choose date';
    }

    setCurrentError(error);
    modifyParentState();
  }, [currentError, inputValue]);

  let showError = currentError && props.error;
  return (
    <label htmlFor='birthday'>
      <p>Date of birth:</p>
      <input
        onChange={textareaChange}
        type='date'
        name='birthday'
        min='1800-01-01'
        max={new Date().toISOString().split('T')[0]}
      />
      <p className={`${styles.textError} ${!showError ? styles.hidden : ''}`}>{currentError}</p>
    </label>
  );
}
