import React, { Component } from 'react';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e){
        if(this.refs.title.value ===''){
            alert('Title required');
        } else{
            this.setState({newProject:{
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category =>{
            return <option key={category} value={category}>{category}</option>
        });

        const addproject ={
            background: '#345345',
            width: '300px',
            color: 'darkblue',
            border: '1px solid black',
            padding: '5px',
            margin: '20px'
        };
        const heading ={
            background: '#f45345',
            padding: '5px',
            marginBottom: '10px'
        };

        return (
            <div className="addProject" style={addproject}>
                <div style={heading}>
                    <h4>Add Project</h4>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref="title" /> <br/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddProject;