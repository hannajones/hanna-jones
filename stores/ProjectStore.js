import { dispatch, register } from '../dispatcher/AppDispatcher';
import ProjectConstants from '../constants/ProjectConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change'

// underscore prefix indicates private variable
var _catalog = [];

// populate with dummy data
var appData = require('../scripts/data.js')

// function to push dummy data into catalog
var dataToArray = function(data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    _catalog.push(data[key])
  }
  return _catalog
}

// calling function on dummy data
dataToArray(appData);

var _projects = _catalog;

const _findProject = (project) => {
  return _projects.find(myProject => myProject.id == project)
}

const _createProject = (project) => {
  _projects.push(project)
  return _projects
}

const _deleteProject = (project) => {
  _projects.splice(_projects.findIndex(i => i === project), 1);
}

const _updateProject = (project) => {
  var myProject = _findProject(project);
  var myProject = project;
}

const ProjectStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getProjects() {
    return _projects;
  },

  getCatalog() {
    return _catalog;
  },

  dispatcherIndex: register( function(action) {
    switch(action.actionType) {
      case ProjectConstants.FIND_PROJECT:
        _findProject(action.project);
        break;
      case ProjectConstants.CREATE_PROJECT:
        _createProject(action.project);
        break;
      case ProjectConstants.DELETE_PROJECT:
        _deleteProject(action.project);
        break;
      case ProjectConstants.UPDATE_PROJECT:
        _updateProject(action.project);
        break;
    }
    
    ProjectStore.emitChange();
 
  })
});

export default ProjectStore
