import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
       this.setState( state => ({
           visibility: !state.visibility
       }));
    }
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <h1>Hello, {this.props.name}</h1>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            )
        } else {
            return (
                <button onClick={this.handleClick}>Click</button>
            )
        }
        
    }
}
