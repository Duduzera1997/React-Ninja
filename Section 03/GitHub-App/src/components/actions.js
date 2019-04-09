import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ getRepositories, getStarred }) => (
  <div className="actions">
    <button onClick={getRepositories}>Ver Repositórios</button>
    <button onClick={getStarred}>Ver Favoritos</button>
  </div>
);

Actions.propTypes = {
  getRepositories: PropTypes.func,
  getStarred: PropTypes.func,
};

export default Actions;
