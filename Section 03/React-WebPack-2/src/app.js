import React, { Component } from 'react'


class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'Eduardo'
        }
    }

    render() {
        return (
            <div className="container" onClick={() => (this.setState({
                text:'Text'
            }))}>
                {this.state.text}
            </div>
        )
    }
}
export default App;