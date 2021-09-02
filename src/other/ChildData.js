import React, { Component } from 'react'


export default class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Button pressed"
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={() => {this.props.updateData(this.state.name)}}>Button</button>
            </div>
        )
    }
}
