import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  render() {
    const { onCreated } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onCreated('New Item')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
