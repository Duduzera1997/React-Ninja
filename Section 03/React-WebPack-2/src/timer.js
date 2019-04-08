import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
        this.timer
    }

    componentDidMount() {
       this.timer = setInterval(() => {
            this.setState({time:this.state.time + 1})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);   
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('shouldComponentUpdate', this.props, nextProps)
        return this.props !== nextProps.time;
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', this.props, nextProps)
    }

    componentDidUpdate(prevProps, nextState) {
        console.log('componentDidUpdate timer', this.props, prevProps)
    }
    
    render() {
        console.log('render timer')
        return (
            <div>Timer: {this.state.time}</div>
        )
    }
}

export default Timer;