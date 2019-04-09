import React from 'react';
import PropTypes from 'prop-types';

import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepositories,
  getStarred,
  isFetching,
}) => (
  <div className="app">
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && (
      <Actions getRepositories={getRepositories} getStarred={getStarred} />
    )}

    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepositories: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default AppContent;
