import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title name="Eduardo" lastName={'N.'} />
            </div>
        )
    }
}
/*
const App = React.createClass({
    render: () => {
        return (
            <div className="container">
                <Title name="Eduardo" lastName={'N.'} />
            </div>
        )
    }
})*/
export default App;