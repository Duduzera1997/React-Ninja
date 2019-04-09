import React, { Component } from 'react';

import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        userName: 'Eduardo J. Nascimento',
        login: 'Duduzera1997',
        photo: 'https://avatars0.githubusercontent.com/u/35508801?v=4',
        repositories: 7,
        followers: 0,
        following: 4,
      },
      repos: [
        {
          name: 'Repo',
          link: '#',
        },
      ],
      starred: [
        {
          name: 'Fav',
          link: '#',
        },
      ],
    };
  }

  render() {
    const { userInfo, repos, starred } = this.state;
    return <AppContent userInfo={userInfo} repos={repos} starred={starred} />;
  }
}
export default App;
