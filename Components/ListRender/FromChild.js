import React from 'react'

function FromChild({name, index}) {
    return (
        <div>
            <li key={index}> My name is {name.name} and I worked in {name.skill}</li>
        </div>
    )
}
export default FromChild
