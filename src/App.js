import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={
            projects: []
        }
    }

    componentWillMount() {
      this.setState({projects:[
          {
              title: 'Business Site',
              category: 'Web Design'
          },
          {
              title: 'Social Media',
              category: 'Mobile Dev'
          },
          {
              title: 'Ecommerce',
              category: 'Web Dev'
          }
      ]});
    }

    handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
      //console.log(project);
    }

  render() {
    const app ={
      background: '#123456',
      minHeight: '500',
      maxWidth: '1000px',
      padding: '1px'
    };
    const add_project ={
      float: 'middle'
    };
    const projects ={
      float: 'middle'
    };

    return (
      <div className="App" style={app}>
        <AddProject addProject={this.handleAddProject.bind(this)} style={add_project} />
        <Projects projects={this.state.projects} style={projects} />
      </div>
    );
  }
}

export default App;
