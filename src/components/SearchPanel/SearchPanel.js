import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ onSearchChange }) => {
  const onChange = e => {
    onSearchChange(e.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onChange}
    />
  );
};

export default SearchPanel;
