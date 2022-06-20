import React from 'react';
import styles from './Modal.module.css';

export default function Modal(props) {
  return (
    <div className={styles.modal}>
      <h1>
        {props.values?.name.value} {props.values?.surname.value}
      </h1>
      <p>Date of birth: {props.values?.birthday?.value}</p>
      <p>Phone Number: {props.values?.phone.value}</p>
      <p>Website: {props.values?.website.value}</p>
      <p>
        About: <br />
        {props.values?.about.value}
      </p>
      <p>
        Tech Stack: <br />
        {props.values?.stack.value}
      </p>
      <p>
        Last Project: <br />
        {props.values?.project.value}
      </p>
    </div>
  );
}
