import React, { Component } from 'react'

class BookForm extends Component {

    state = {
        title: "",
        author: "",
        genre: "",
        summary: ""
    }



    render() {
        return (
            <div>
                
                <form>
                    <label>Title</label>
                    <input type="text" value={this.state.title }></input>


                </form>
                
            </div>
        )
    }
}

export default BookForm
