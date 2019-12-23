import React from 'react'
import FromChild from './FromChild'

function SampleList() {
    const names = [
        {
            name : 'Arun',
            skill : 'Vue'
        },
        
        {
            name : 'Ram',
            skill : 'React'
        }
    ]
    const nameList =  names.map((name, index) => <FromChild name = {name} index = {index}/>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default SampleList
