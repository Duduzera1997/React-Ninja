import React, { Component } from 'react';
import axios from 'axios';

import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  getRepositories(type) {
    return () => {
      axios
        .get(`http://api.github.com/users/Duduzera1997/${type}`)
        .then(res => {
          this.setState({
            [type]: res.data.map(repo => ({
              name: repo.name,
              link: repo.html_url,
            })),
          });
        });
    };
  }

  handleSearch(e) {
    const { value } = e.target;
    const api = 'https://api.github.com/users/';
    const keyCode = e.wich || e.keyCode;
    const enter = 13;
    if (keyCode === enter) {
      axios.get(`${api}${value}`).then(res => {
        this.setState({
          userInfo: {
            userName: res.data.name,
            repositories: res.data.public_repos,
            photo: res.data.avatar_url,
            login: res.data.login,
            repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following,
          },
        });
      });
    }
  }

  render() {
    const { userInfo, repos, starred } = this.state;
    return (
      <AppContent
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        handleSearch={e => this.handleSearch(e)}
        getRepositories={this.getRepositories('repos')}
        getStarred={this.getRepositories('starred')}
      />
    );
  }
}
export default App;
