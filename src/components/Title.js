import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className={style.title}>
        <h1>Yes, you can</h1>
        <span>
           {this.props.listLength}
        </span>
      </div>
    );
  }
}

export default Title;
