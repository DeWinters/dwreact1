import React, { Component } from 'react';


class ProjectItem extends Component {
    render() {
        //console.log(this.props);
        const title ={
            fontWeight: 'strong',
            color: 'violet'
        };
        const descr ={
            color: '#000000'
        };
        return (
            <li className="Project">
                <span style={title}>{this.props.project.title}</span>
                <span style={descr}> - {this.props.project.category}</span>
            </li>
        );
    }
}

export default ProjectItem;