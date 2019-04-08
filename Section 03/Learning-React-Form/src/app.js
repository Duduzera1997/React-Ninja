import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      showContent: false,
    };
  }

  render() {
    const { checked, showContent } = this.state;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              this.setState(
                {
                  checked: !checked,
                },
                () => {
                  this.setState({
                    showContent: checked,
                  });
                }
              );
            }}
          />{' '}
          Mostrar conteúdo
        </label>
        {showContent && <div> Olha eu Aqui!</div>}
      </div>
    );
  }
}
export default App;
