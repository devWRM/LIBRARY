import React, { Component } from 'react';

class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    handleClick = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    // Like button
    //     click button display heart <3
    //     click button remove heart


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Like</button>
               <p>{this.state.liked ? "<3" : null}</p>
                           
            </div>
        )
    }
}

export default Like;
