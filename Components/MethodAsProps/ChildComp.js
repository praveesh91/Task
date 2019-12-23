import React from 'react'
import {Button} from 'reactstrap'

function ChildComp(props) {
    return (
        <div>
            {/* <Button onClick = {props.greetHandler}>Click</Button> */}
            <Button onClick = {() => props.greetHandler("and the rest passed from child component")}  >Click</Button>
        </div>
    )
}

export default ChildComp


//1. Called parent method through props.funcName.Make sure pass props as parameter
//2. Can pass a parameter while calling a parent method using arrow function in onClick