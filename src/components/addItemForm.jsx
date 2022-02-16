import React, { Component } from 'react';

class AddItemForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (e) => {
    this.props.onAdd(this.inputRef.current.value);
    this.formRef.current.reset();
    this.inputRef.current.focus();
    e.preventDefault();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-item" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Add a todo" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default AddItemForm;
