import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink coffe'),
      this.createTodoItem('Crete React App'),
      this.createTodoItem('Make a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  togglePropertyValue(array, id, property) {
    const index = array.findIndex(el => el.id === id);
    const oldItem = array[index];
    const newItem = {
      ...array[index],
      [property]: !oldItem[property]
    };

    const newArray = [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ];

    return newArray;
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const newArray = this.togglePropertyValue(todoData, id, 'done');

      return {
        todoData: newArray
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newArray = this.togglePropertyValue(todoData, id, 'important');

      return {
        todoData: newArray
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onCreated={this.addItem} />
      </div>
    );
  }
}
