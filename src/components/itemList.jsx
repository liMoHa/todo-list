import React, { Component } from 'react';
import Item from './item.jsx';

class ItemList extends Component {
  render() {
    return (
      <ul className="item-lists">
        {/* forEach가 아니라 map이용해서 Item component를 밖으로 꺼내는 느낌 */}
        {this.props.todoLists.length > 0 &&
          this.props.todoLists.map((todoList) => {
            console.log(todoList.id, 'id');
            return (
              <Item
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
                todoList={todoList}
                key={todoList.id}
              />
            );
          })}
      </ul>
    );
  }
}

export default ItemList;
