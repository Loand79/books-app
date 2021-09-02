import React, { Component } from 'react'


export default class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Render input</h1>
                <p>
                    {this.props.input}
                </p>
            </div>
        )
    }
}
