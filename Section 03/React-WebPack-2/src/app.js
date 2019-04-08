import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
    render() {
        return (
            <div className="container">
            {['blue', 'red', 'green'].map((square) => (
                <Square key={square} color={square} />
            ))}
            </div>
        )
    }
}
export default App;