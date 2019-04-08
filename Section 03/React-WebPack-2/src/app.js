import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
    constructor() {
        super();
        this.state = {
            showTimer: true
        }
        console.log('Constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }



    render() {
        console.log('render')
        return (
            <div>
                { this.state.showTimer && <Timer /> }
                <button onClick={() => { 
                    this.setState({showTimer: !this.state.showTimer })
                }
                }>Show/Hide Timer</button>
            </div>
        )
    }
}
export default App;