import React, { Component } from 'react';


class ProjectItem extends Component {
    render() {
        console.log(this.props);
        return (
            <li className="Project">
                <b>{this.props.project.title}</b> - {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem;