import React, { useState } from 'react';
import styles from './Form.module.css';
import InputBlock from '../InputBlock/InputBlock';
import Buttons from '../Buttons/Buttons';
import BirthdayPicker from '../BirthdayPicker/BirthdayPicker';

export default function Form(props) {
  const [state, setState] = useState({ errorShow: false, buttonLinksToResult: false });

  function inputsState(name, stateObj) {
    setState((prevState) => ({
      ...prevState,
      [name]: stateObj,
    }));

    let containsError = false;
    for (const [key] of Object.entries(state)) {
      if (state[key]?.error === true) {
        containsError = true;
      }
    }

    if (!containsError && state.name !== undefined) {
      props.updateModal(state);

      setState((prevState) => ({ ...prevState, buttonLinksToResult: true }));
    }
  }

  return (
    <form action='post'>
      <h1>Submit the form</h1>
      <InputBlock
        type={'input'}
        label={'Name'}
        formName={'name'}
        placeholder={'Mike'}
        onInputChange={inputsState}
        error={state.errorShow}
      />
      <InputBlock
        type={'input'}
        label={'Surname'}
        formName={'surname'}
        placeholder={'Wazowski'}
        onInputChange={inputsState}
        error={state.errorShow}
      />
      <BirthdayPicker error={state.errorShow} formName={'birthday'} onInputChange={inputsState} />

      <InputBlock
        type={'input'}
        label={'Phone Number'}
        formName={'phone'}
        placeholder={'1-2345-67-89'}
        onInputChange={inputsState}
        error={state.errorShow}
      />

      <InputBlock
        type={'input'}
        label={'Website'}
        formName={'website'}
        placeholder={'https://www.yoursite.com'}
        onInputChange={inputsState}
        error={state.errorShow}
      />

      <InputBlock
        type={'textarea'}
        label={'About You'}
        formName={'about'}
        placeholder={'tell us about yourself'}
        onInputChange={inputsState}
        error={state.errorShow}
      />

      <InputBlock
        type={'textarea'}
        label={'Tech Stack'}
        formName={'stack'}
        placeholder={'what technologies do you know'}
        onInputChange={inputsState}
        error={state.errorShow}
      />

      <InputBlock
        type={'textarea'}
        label={'More about your work'}
        formName={'project'}
        placeholder={'tell us about your last project'}
        onInputChange={inputsState}
        error={state.errorShow}
      />

      <Buttons
        buttonLinksToResult={state.buttonLinksToResult}
        onSave={() => {
          setState((prevState) => ({
            ...prevState,
            errorShow: true,
          }));
        }}
      />
    </form>
  );
}
