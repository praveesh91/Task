import React, { Component } from 'react'
import {Button} from 'reactstrap'
    import { format } from 'url'
export class ClsComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Guest"
        }
    }

    handleClick = () => {
        this.setState({
            name : 'User'
        })
    }

    render() {
        
        return (
            <div>
                <h1>This is a class component and its a test for {this.props.name} </h1>
                <h2>Welcome {this.state.name} </h2>
                <Button onClick = {this.handleClick} >Click to Login</Button>
            </div>
        )
    }
}

export default ClsComp

//for both class and functional components the props are passed as atributes
//class component called as this.props.propName
//props are immutable
//props are passed into the component
//cannot assign like props.propasName=someValue
