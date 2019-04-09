import React from 'react';

const UserInfo = () => (
  <div className="user-info">
    <img
      alt="teste"
      src="https://avatars0.githubusercontent.com/u/35508801?v=4"
    />
    <h1 className="username">
      <a href="https://github.com/Duduzera1997">Eduardo J. Nascimento</a>
    </h1>

    <ul className="repos-info">
      <li>Repositórios: 7</li>
      <li>Seguidores: 0</li>
      <li>Seguindo: 4</li>
    </ul>
  </div>
);

export default UserInfo;
