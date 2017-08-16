import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    render() {
        let projectItems;
        if(this.props.projects){
            projectItems= this.props.projects.map(project => {
                return(
                    <ProjectItem key={project.title} project={project} />
                );
            });
        }

        const projects = {
            background: '#432132',
            width: '300px',
            border: '1px solid black',
            padding: '5px',
            margin: '20px'
        };
        const header = {
            color: 'blue'
        };
        const output = {
            color: 'violet'
        };

        return (
            <div className="projects" style={projects}>
                <h4 style={header}>
                    Currently Listed Courses
                </h4>
                <span style={output}>
                    {projectItems}
                </span>
            </div>
        );
    }
}

export default Projects;
