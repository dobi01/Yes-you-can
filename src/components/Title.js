import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className={style.title}>
        <h1>Yes, you can</h1>
        <p>things to be done: {this.props.listLength}</p>
      </div>
    );
  }
}

export default Title;
