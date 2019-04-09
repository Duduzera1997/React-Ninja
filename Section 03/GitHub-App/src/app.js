import React, { Component } from 'react';

import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => {
  return (
    <div className="app">
      <Search />
      <UserInfo />
      <Actions />
      <Repos
        className="repos"
        title="Repositórios:"
        repos={[
          {
            name: 'Nome do Repositório',
            link: '#',
          },
        ]}
      />
      <Repos
        className="starref"
        title="Favoritos:"
        repos={[
          {
            name: 'Nome do Repositório',
            link: '#',
          },
        ]}
      />
    </div>
  );
};
export default App;
