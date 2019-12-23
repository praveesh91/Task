import React, { Component } from 'react'
import ChildComp from './ChildComp.js'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Praveesh'
        }
    }

    greetHandler = (childName) =>{
        alert(`Hello  ${this.state.parentName}  ${childName}` )
    }
    
    render() {
        return (
            <div>
                <ChildComp greetHandler = {this.greetHandler} />
            </div>
        )
    }
}

export default ParentComp

//1. Passed methods as props in the react component
//2. Recieved parameter from child component in case child passing them through its arrow functions
