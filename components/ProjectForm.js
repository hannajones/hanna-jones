import React from 'react';
import ProjectActions from '../actions/ProjectActions';
import Rebase from 're-base';

// probably don't need to be using store anymore

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
    this.pushImage = this.pushImage.bind(this);
  }
  componentWillMount() {
    var currentProject = this.state.project
    currentProject.id = Date.now();
    this.setState({project: currentProject});
  }
  updateTitle() {
    var currentProject = this.state.project
    currentProject.title = this.refs.title.value
    this.setState({project: currentProject})
  }
  updateDescription() {
    var currentProject = this.state.project
    currentProject.description = this.refs.description.value
    this.setState({project: currentProject})
  }
  pushImage() {
    var currentProject = this.state.project
    if (this.refs.image.value != "" || null || undefined) {
     currentProject.images.push(this.refs.image.value) 
    }
    this.setState({project: currentProject})
    this.refs.image.value = ""
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
            <button onClick={ProjectActions.createProject.bind(null, this.state.project)}>Submit</button><br/>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectForm
