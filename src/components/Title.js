import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className={style.title}>
        <h1>Yes, you can
          <span>
           {this.props.listLength}
          </span>
        </h1>
      </div>
    );
  }
}

export default Title;
