import React, { Component } from 'react'
import { connect } from 'react-redux';


import { newBook } from '../actions/libraryActions.js';




class BookForm extends Component {

    state = {
        title: "",
        author: "",
        genre: "",
        summary: ""
    }


    handleChange = e => {
        
        this.setState({
            [e.target.name]: e.target.value       
        })

    }


    handleSubmit = e => {
        e.preventDefault()

        // this.state =>> book (input info)
        this.props.newBook(this.state, this.props.library.id)
        this.setState({
            title: "",
            author: "",
            genre: "",
            summary: ""
        })
    }



    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" value={this.state.title } onChange={this.handleChange} name="title"></input>

                    <label>Author</label>
                    <input type="text" value={this.state.author } onChange={this.handleChange} name="author"></input>

                    <label>Genre</label>
                    <input type="text" value={this.state.genre } onChange={this.handleChange} name="genre"></input>

                    <label>Summary</label>
                    <input type="text" value={this.state.summary } onChange={this.handleChange} name="summary"></input>

                    <input type="submit" value="donate book"></input>

                </form>
                
            </div>
        )
    }
}

export default connect(null, { newBook })(BookForm);
