import React, { Component } from 'react'

export default class ControlInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: ''
        }
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handlechange}/>
                <h5>Controlled input:</h5>
                <p>{this.state.input}</p>
            </div>
        )
    }
}
