import React, { Component } from 'react';
import AddItemForm from './addItemForm';
import ItemList from './itemList';

class Todo extends Component {
  // 상태 들어가도 될 듯
  state = {
    todoLists: [],
  };

  handleAdd = (todo) => {
    let todoLists;
    if (this.state.todoLists.length === 0) {
      todoLists = [{ id: Date.now(), todo }];
    } else {
      todoLists = [...this.state.todoLists, { id: Date.now(), todo }];
    }
    this.setState({ todoLists });
  };

  handleDelete = (item) => {
    const todoLists = this.state.todoLists.filter(
      (todoList) => item.id !== todoList.id
    );

    this.setState({ todoLists });
  };

  handleUpdate = () => {};
  render() {
    return (
      <div className="todo">
        <h1 className="title">What's the Plan for Today?</h1>
        <AddItemForm onAdd={this.handleAdd} />
        <ItemList
          todoLists={this.state.todoLists}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default Todo;
