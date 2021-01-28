import React, { Component } from 'react'
import { connect } from 'react-redux';


import { newLibrary } from '../actions/libraryActions.js';



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


    handleSubmit = e => {
        e.preventDefault()
        this.props.newLibrary(this.state)

        this.setState({
            name: "",
            street: "",
            city: "",
            state: ""
        })
    }



    render() {
        return (
            <div
            
                style = {{
                    // width: '50%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    // fontSize: 20px,
                    
                    // border: '2px solid #ccc',
                    padding: '1rem'
                }}
            
            >

            
            ▸ Fill in the form and submit to add a library to the list.<br></br>
            ▸ Click a library name to see library details.<br></br>


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


export default connect(null, { newLibrary })(LibraryForm);
