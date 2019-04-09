import React from 'react';

import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite o nome do Usuário no GitHub"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
