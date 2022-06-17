import React from 'react';
import styles from './Form.module.css';
import InputBlock from '../InputBlock/InputBlock';
import Buttons from '../Buttons/Buttons';
import BirthdayPicker from '../BirthdayPicker/BirthdayPicker';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorShow: false };

    this.inputsState = this.inputsState.bind(this);
    this.runValidation = this.runValidation.bind(this);
  }

  inputsState(name, stateObj) {
    this.setState({ [name]: stateObj });
  }

  runValidation() {
    let containsError = false;

    for (const [key] of Object.entries(this.state)) {
      if (this.state[key].error === true) {
        containsError = true;
      }
    }
    if (!containsError) {
      this.props.updateModal(this.state);
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <form action='post' className={`${this.props.displayModal === true ? styles.hidden : ''}`}>
        <h1>Submit the form</h1>
        <InputBlock
          type={'input'}
          label={'Name'}
          formName={'name'}
          placeholder={'Mike'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />
        <InputBlock
          type={'input'}
          label={'Surname'}
          formName={'surname'}
          placeholder={'Wazowski'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />
        <BirthdayPicker error={this.state.errorShow} formName={'birthday'} callback={this.inputsState} />

        <InputBlock
          type={'input'}
          label={'Phone Number'}
          formName={'phone'}
          placeholder={'1-2345-67-89'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />

        <InputBlock
          type={'input'}
          label={'Website'}
          formName={'website'}
          placeholder={'https://www.yoursite.com'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />

        <InputBlock
          type={'textarea'}
          label={'About You'}
          formName={'about'}
          placeholder={'tell us about yourself'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />

        <InputBlock
          type={'textarea'}
          label={'Tech Stack'}
          formName={'stack'}
          placeholder={'what technologies do you know'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />

        <InputBlock
          type={'textarea'}
          label={'More about your work'}
          formName={'project'}
          placeholder={'tell us about your last project'}
          callback={this.inputsState}
          error={this.state.errorShow}
        />

        <Buttons
          onSave={() => {
            this.setState({ errorShow: true }, () => {
              this.runValidation();
            });
          }}
        />
      </form>
    );
  }
}

export default Form;
