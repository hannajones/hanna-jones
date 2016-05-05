import React from 'react';
import ProjectActions from '../actions/ProjectActions';
import Rebase from 're-base';
import { Link } from 'react-router';

// probably don't need to be using store anymore
var base = Rebase.createClass('https://newnewtest.firebaseio.com/');

class ProjectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      project: {
        id: null,
        title: '',
        description: '',
        images: []
      }
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.sendData = this.sendData.bind(this);
    this.pushImage = this.pushImage.bind(this);
  }
  componentWillMount() {
    var currentProject = this.state.project;
    currentProject.id = Date.now();
    this.setState({project: currentProject})
  }
  // make a reusable date function
  updateTitle() {
    var currentProject = this.state.project;
    currentProject.title = this.refs.title.value;
    this.setState({project: currentProject})
  }
  updateDescription() {
    var currentProject = this.state.project;
    currentProject.description = this.refs.description.value;
    this.setState({project: currentProject})
  }
  pushImage() {
    var currentProject = this.state.project;
    if (this.refs.image.value != "" || null || undefined) {
     currentProject.images.push(this.refs.image.value) 
    }
    this.setState({project: currentProject});
    this.refs.image.value = ""
  }
  sendData(e) {
    e.preventDefault();
    var project = this.state.project;
    base.push('projects', {
     data: {id: project.id, title: project.title, description: project.description, images: project.images}
    });
    this.refs.title.value = ""
    this.refs.description.value = ""
    var currentProject = this.state.project;
    currentProject.images = [];
    currentProject.id = Date.now();
    console.log(currentProject);
    this.setState({project: currentProject})
  } 
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <form>
            <input type="text" ref="title" placeholder="title" onChange={this.updateTitle}/><br/>
            <textarea ref="description" name="description" id="description" cols="30" rows="10" onChange={this.updateDescription}></textarea><br/>
            <input type="text" ref="image" placeholder="image url"/><br/>
            <a className="waves-effect waves-light btn" onClick={this.pushImage}>Add Image</a><br/><br/>
            <button onClick={this.sendData}>Submit</button><br/>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectForm
