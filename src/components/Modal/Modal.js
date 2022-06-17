import React from 'react';
import styles from './Modal.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.displayModal === true) {
    }
    return (
      <div className={`${styles.modal} ${this.props.displayModal !== true ? styles.hidden : ''}`}>
        <h1>
          {this.props.values?.name.value} {this.props.values?.surname.value}
        </h1>
        <p>Date of birth: {this.props.values?.birthday.value}</p>
        <p>Phone Number: {this.props.values?.phone.value}</p>
        <p>Website: {this.props.values?.website.value}</p>
        <p>
          About: <br />
          {this.props.values?.about.value}
        </p>
        <p>
          Tech Stack: <br />
          {this.props.values?.stack.value}
        </p>
        <p>
          Last Project: <br />
          {this.props.values?.project.value}
        </p>
      </div>
    );
  }
}

export default Form;
