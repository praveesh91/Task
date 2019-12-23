import React, { Component } from 'react'
import {Button} from 'reactstrap'

 class EventBindingTypes extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message :'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : "Hai"
    //     })
    // }
    
    clickHandler = () => {
        this.setState({
                    message : "Hai"
                 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <Button onClick = {this.clickHandler.bind(this)} >Click</Button> */}
                {/* <Button onClick = { () => this.clickHandler()} >Click</Button> */}
                <Button onClick = { this.clickHandler } >Click</Button>
            </div>
        )
    }
}

export default EventBindingTypes

//Types of event binding
//1. Binding within the render method <Button onClick = {this.clickHandler.bind(this)} >Click</Button>
//2. Binding  by calling in the arrow function <Button onClick = { () => this.clickHandler()} >Click</Button>
//3. Binding in the constructor this.clickHandler = this.clickHandler.bind(this) in constructor
//4. Binding using arrow fnction as a class property

//Approach 3 and 4 good