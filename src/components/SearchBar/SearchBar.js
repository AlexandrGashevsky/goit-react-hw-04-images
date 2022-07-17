import React from 'react';

import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import searchBarStyles from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={searchBarStyles.SearchBar}>
    <SearchForm onSearch={onSubmit} />
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
