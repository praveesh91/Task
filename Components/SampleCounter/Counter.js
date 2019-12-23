import React, { Component } from 'react'
import {Button} from 'reactstrap'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    handleClick = () =>{
       
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     },
        //     () => {
        //         console.log("Callback value is " +this.state.count)
        //     }
        //     )

        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
    }
    
    render() {
        let val = this.state.count
        return (
            <div>
                <h1>{val}</h1>
                <Button onClick={this.handleClick} >Click</Button>
            </div>
        )
    }
}

export default Counter

//1.never modify the state directly, use setState method instead
//2.whenever you need to excecute the code after the state has been changed, don't place it sfter the setState
//instead place it in callack function which is passed as a second parameter in the setState method
//3.when we have to update the state based on the previous state, pass function as an argument instead of object
