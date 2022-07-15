import { useState } from 'react';
import PropTypes from 'prop-types';
import searchFormStyles from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleSubmit = e => {
   
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  }; 



  return (
    <form onSubmit={handleSubmit} className={searchFormStyles.SearchForm}>
      <button type="submit" className={searchFormStyles.buttonForm}>
          <svg  width="24" height="24"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
      </button>

      <input
        type="text"
        className={searchFormStyles.input}
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
