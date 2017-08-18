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
            })

        }

        const projects = {
            background: '#432132',
            width: '300px',
            border: '1px solid black',
            padding: '5px',
            margin: '20px'
        };
        const header = {
            color: 'blue',
            background: '#f4b3bb',
            padding: '5px',
            marginBottom: '10px'
        };
        const output = {
            listStyleType: 'none'
        };

        return (
            <div className="projects" style={projects}>
                <div style={header}>
                    <h4>
                        Currently Listed Courses
                    </h4>
                </div>
                <span style={output}>
                    {projectItems}
                </span>
            </div>
        );
    }
}

export default Projects;
