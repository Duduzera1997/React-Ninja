import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '2',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form>
          <select
            value={value}
            onChange={e => {
              this.setState({
                value: e.target.value,
              });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </form>
      </div>
    );
  }
}
export default App;
