import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'workout 1 h'
        }, {
          id: 2,
          text: 'smile'
        }, {
          id: 3,
          text: 'meditate 10 min'
        }
      ]
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({
      data
    });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({
      data: remainder
    });
  }

  render() {
    return (
      <div className = {style.TodoApp}>
        <Title listLength = {this.state.data.length}/>
        <TodoForm addItem = {this.addTodo.bind(this)}/>
        <TodoList data = {this.state.data} removeItem = {this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
