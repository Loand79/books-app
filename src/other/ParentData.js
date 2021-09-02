import React, { Component } from 'react';
import ChildData from './ChildData';

export default class Data2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "Button not pressed"
        }
        this.updateData = this.updateData.bind(this);
    }
   
    updateData = (value) => {
        this.setState({
            name: value
        })
    }
    render() {
        return (
            <div>
                
                <p>State: {this.state.name}</p>
                <ChildData  updateData={this.updateData}/>
            </div>
        )
    }
}
