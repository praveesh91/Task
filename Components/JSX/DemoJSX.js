import React from 'react'

function DemoJSX() {
    // return (
    //     <div id="sampleId">
    //         <h1 className="sampleClass">This is using JSX.</h1>
    //     </div>
    // )

    return (
        React.createElement('div', {id:'sampleId'}, React.createElement('h1', {className:'sampleClass'}, 'This one is not using JSX'))
    )
}
export default DemoJSX
