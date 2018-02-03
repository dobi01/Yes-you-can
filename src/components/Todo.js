import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  render() {
    return (
      <li>
        <button onClick = {() => this.props.removeItem(this.props.item.id)}>
          <i className = 'fas fa-times-circle'></i>
        </button>
        <p>{this.props.item.text}</p>
      </li>
    );
  }
}

export default Todo;
