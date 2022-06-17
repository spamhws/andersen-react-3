import React from 'react';
import styles from './Buttons.module.css';

class Buttons extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // componentDidUpdate() {
  //   console.log(this.state.clicked);
  // }

  render() {
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
        <button
          className={styles.save}
          onClick={(event) => {
            this.props.onSave();
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Buttons;
