import css from '../stylesheets/projectForm.css';
import React from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';
import Firebase from 'firebase';

const ref = new Firebase('https://hannajones.firebaseio.com/');
const base = Rebase.createClass('https://hannajones.firebaseio.com/');

class ProjectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        id: null,
        title: '',
        description: '',
        url: null,
        images: [],
        uid: ''
      },
    }
  };

  componentWillMount() {
    var currentProject = this.state.project;
    currentProject.id = Date.now();
    this.setState({project: currentProject})
  };

  updateTitle = () => {
    var currentProject = this.state.project;
    currentProject.title = this.refs.title.value;
    this.setState({project: currentProject})
  };

  updateUrl = () => {
    var currentProject = this.state.project;
    currentProject.url = this.refs.url.value;
    console.log(currentProject.url);
    this.setState({project: currentProject})
  };

  updateDescription = () => {
    var currentProject = this.state.project;
    currentProject.description = this.refs.description.value;
    this.setState({project: currentProject})
  };

  pushImage = () => {
    var currentProject = this.state.project;
    if (this.refs.image.value != "" || null || undefined) {
     currentProject.images.push(this.refs.image.value) 
    }
    this.setState({project: currentProject});
    this.refs.image.value = ""
  };

  resetValues = () => {
    this.refs.title.value = ""
    this.refs.description.value = ""
    this.refs.url.value = ""
  };

  authenticate = (email, password) => {
    event.preventDefault();
    var self = this;
    ref.authWithPassword({
      email: email,
      password: password
    }, function(error, authData) {
      if (error) {
        alert("NO.")
      } else {
        self.setState({uid: authData.uid})
      }
    });
  };

  renderLogin = () => {
    return (
      <div className="section-background z-depth-2">
        <form>
          <input type="text" ref="email" placeholder="email"/>
          <input type="password" ref="password" placeholder="password"/>
          <div className="password" onClick={() => this.authenticate(this.refs.email.value, this.refs.password.value)}>Login</div>
        </form>
      </div>
    )
  };

  renderFailure = () => {
    return (
      <div className="section-background z-depth-2">
        <div className="content-container">
          <p>permission denied.</p>
        </div>
      </div>
    )
  };

  sendData = (e) => {
    e.preventDefault();
    var project = this.state.project;
    base.push('projects', {
     data: {id: project.id, title: project.title, description: project.description, images: project.images, url: project.url}
    });
    this.resetValues();
    var currentProject = this.state.project;
    currentProject.images = [];
    currentProject.id = Date.now();
    this.setState({project: currentProject})
  };

  render() {
    let logoutButton = <button>Log Out</button>
    if(!this.state.uid) {
      return (
        <div className="content-container">
          <div>{this.renderLogin()}</div>
        </div>
      )
    }
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <form>
            <input type="text" ref="title" placeholder="title" onChange={this.updateTitle}/><br/>
            <input type="text" ref="url" placeholder="url" onChange={this.updateUrl}/><br/>
            <textarea ref="description" name="description" id="description" cols="30" rows="10" onChange={this.updateDescription}></textarea><br/>
            <input type="text" ref="image" placeholder="image url"/><br/>
            <a className="waves-effect waves-light btn" onClick={this.pushImage}>Add Image</a><br/><br/>
            <button onClick={this.sendData}>Submit</button><br/>
            {logoutButton}
          </form>
          <div className="center-align">
          { this.state.project && this.state.project.images.length > 0 ?
            this.state.project.images.map(function(image) {
              return (
                <div key={image + 1} className="thumbnail-container">
                  <img className="thumbnail" key={image} src={image} alt="image"/>
                </div>
              )
            })
            : false
          }
          </div>
        </div>
      </div>
    )
  };
}

export default ProjectForm
