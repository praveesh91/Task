import React, { Component } from 'react'

class LoginUser extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return (
                this.state.isLoggedIn ? 
                (<h1>Welcome User</h1>) : 
                (<h1>Welcome Guest</h1>)
            )
        }
    }

export default LoginUser
