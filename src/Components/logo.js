import React, { Component } from 'react';

class logo extends Component {
    constructor(){
        super();
        this.state ={
            logo
        }
    }
    render() {
            const heading ={
            background: '#yellow',
            width: '300px',
            color: 'darkblue',
            border: '1px solid black',
            padding: '5px',
            margin: '20px'
        };

        return (
            <div className="addProject">
                <div style={heading}>
                    <h1>MAS</h1>
                </div>
            </div>
        );
    }
}

export default logo;