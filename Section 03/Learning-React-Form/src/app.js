import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Valor Inicial',
      checked: false,
    };
  }

  render() {
    const { value, checked } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={value}
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          />
          <label htmlFor="myCheck">
            <input
              id="myCheck"
              type="checkbox"
              checked={checked}
              onChange={e => {
                this.setState({ checked: !checked });
              }}
            />
            Checkbox
          </label>
          <input type="radio" name="rd" value="1" /> Rádio 1
          <input type="radio" name="rd" value="2" /> Rádio 2
        </form>
      </div>
    );
  }
}
export default App;
