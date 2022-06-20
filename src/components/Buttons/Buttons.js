import React from 'react';
import styles from './Buttons.module.css';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
  let finalLink = props.buttonLinksToResult ? '/result' : '';
  return (
    <div
      onClick={(event) => {
        event.preventDefault();
      }}
      className={styles.buttons}
    >
      <button
        onClick={() => {
          window.location.reload();
          return false;
        }}
        className={styles.cancel}
      >
        Cancel
      </button>

      <Link
        className={styles.save}
        onClick={(event) => {
          props.onSave();
        }}
        to={finalLink}
      >
        Save
      </Link>
    </div>
  );
}
