import React, { Component } from 'react';

const App = () => {
  return (
    <div className="app">
      <div className="user-info">
        <img
          alt="teste"
          src="https://avatars0.githubusercontent.com/u/35508801?v=4"
        />
        <h2>
          <a href="https://github.com/Duduzera1997">Eduardo J. Nascimento</a>
        </h2>

        <ul className="repos-info">
          <li>Repositórios: 7</li>
          <li>Seguidores: 0</li>
          <li>Seguindo: 4</li>
        </ul>
        <div className="actions">
          <button>Ver Repositórios</button>
          <button> Ver Favoritos</button>
        </div>
        <div className="repos">
          <h2>Repositórios: </h2>
          <ul>
            <li>
              <a href="#">Nome do Repositório.</a>
            </li>
          </ul>
        </div>
        <div className="starred">
          <h2>Favoritos: </h2>
          <ul>
            <li>
              <a href="#">Nome do Repositório.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
