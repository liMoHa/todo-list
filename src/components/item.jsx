import React, { Component } from 'react';

class Item extends Component {
  onDelete = (e) => {
    this.props.onDelete(this.props.todoList);
  };

  onUpdate = (e) => {
    this.props.onUpdate(this.props.todoList);
  };

  render() {
    return (
      <li className="item">
        <span className="item-name">{this.props.todoList.todo}</span>
        <div className="item-buttons">
          <button className="item-delete" onClick={this.onDelete}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="item-update" onClick={this.onUpdate}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
