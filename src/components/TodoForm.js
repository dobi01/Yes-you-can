import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  keyUp(event) {
    if (event.keyCode === 13) {
      this.onSubmit;
    }
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: ''
    });
  }
  render() {
    let listLength = this.props.listLength;
    return (
      <div>
        <form onSubmit = {event => this.onSubmit(event)}>
          <input
            type = "text"
            placeholder = {listLength === 0 ? 'Wow, you made it!' : 'Give yourself a challenge'}
            onChange = {event => this.onChange(event)}
            onKeyUp = {event => this.keyUp(event)}
            value = {this.state.newItem}/>
        </form>
      </div>
    );
  }
}

export default TodoForm;
