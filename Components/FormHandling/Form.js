import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : ""
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : [event.target.value]
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : [event.target.value]
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : [event.target.value]
        })
    }
    
    handleSubmit = (event) =>{
        // alert(`$(this.state.username) $(this.state.comments) $(this.state.topic)`)
        // alert(`$(this.state.username)`)
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.topic)
        event.preventDefault()
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleSelectChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form
