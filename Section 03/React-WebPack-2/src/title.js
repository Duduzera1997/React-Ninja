import React from 'react'

const Title = (props) => {
    return (
        <h1> Olá {`${props.name } ${ props.lastName }`}</h1>
    )
}
Title.defaultProps = {
    name:'Desconhecido',
    lastName:'Sem SobreNome'
}
/*
const Title = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'João',
            lastName: 'Maria'
        }
    },
    render: function() {
        return (
            <h1> Olá {this.props.name} {this.props.lastName.first}!</h1>
        )
    }
}) */

export default Title;