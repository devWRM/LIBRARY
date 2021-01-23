import React, { Component } from 'react'




class LibraryForm extends Component {

    state = {
        name: "",
        street: "",
        city: "",
        state: ""
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>
                    <br></br>

                    <label>Street: </label>
                    <input type="text" value={this.state.street} onChange={this.handleChange} name="street"></input>
                    <br></br>

                    <label>City: </label>
                    <input type="text" value={this.state.city} onChange={this.handleChange} name="city"></input>
                    <br></br>

                    <label>State: </label>
                    <input type="text" value={this.state.state} onChange={this.handleChange} name="state"></input>
                    <br></br>

                    <input type="submit" value="Create Library"></input>

                </form>
                
            </div>
        )
    }
}


export default LibraryForm;
