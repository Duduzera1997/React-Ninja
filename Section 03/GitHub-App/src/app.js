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
      isFetching: false,
    };
  }

  getRepositories(type) {
    const { userInfo } = this.state;
    return () => {
      axios.get(this.getGitHubApiUrl(userInfo.login, type)).then(res => {
        this.setState({
          [type]: res.data.map(repo => ({
            name: repo.name,
            link: repo.html_url,
          })),
        });
      });
    };
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  handleSearch(e) {
    const { value } = e.target;
    const keyCode = e.wich || e.keyCode;
    const enter = 13;
    if (keyCode === enter) {
      this.setState({ isFetching: true });
      axios
        .get(this.getGitHubApiUrl(value))
        .then(res => {
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
            repos: [],
            starred: [],
          });
        })
        .catch(() => {
          alert('Erro ao Consultar o Usuário!');
        })
        .then(() => {
          this.setState({ isFetching: false });
        });
    }
  }

  render() {
    const { userInfo, repos, starred, isFetching } = this.state;
    return (
      <AppContent
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        handleSearch={e => this.handleSearch(e)}
        getRepositories={this.getRepositories('repos')}
        getStarred={this.getRepositories('starred')}
        isFetching={isFetching}
      />
    );
  }
}
export default App;
