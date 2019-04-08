import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '2',
    };
  }

  render() {
    // const { value } = this.state;
    return (
      <div>
        <form>
          <textarea defaultValue={'default \nvalue'} />
        </form>
      </div>
    );
  }
}
export default App;
