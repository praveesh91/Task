import React from 'react'

function FuncComp(props) {
    return (
        <div>
            <h1>This is a functional component with name {props.name} </h1>
            {props.children}
        </div>
    )
}
export default FuncComp

//If we have to pass dynamic HTML content use children
//for both class and functional components the props are passed as atributes
//functional component called as props.propName
//props are immutable
//props are passed into the component
//cannot assign like props.propasName=someValue