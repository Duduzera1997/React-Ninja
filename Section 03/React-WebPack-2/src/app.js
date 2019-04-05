import React from 'react'
import Title from './title'

const App = React.createClass({
    render: () => {
        return (
            <div className="container">
                <Title name="Eduardo" lastName="J. Nascimento" />
            </div>
        )
    }
})
export default App;