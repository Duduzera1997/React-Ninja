import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {

    render() {
        console.log('render')
        return (
            <div>
                { this.state.showTimer && <Timer time={this.state.time}/> }
                <button onClick={() => { 
                    this.setState({time: this.state.time + 10 })
                }
                }>Change Props</button>
            </div>
        )
    }
}
export default App;