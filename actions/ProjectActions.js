import { dispatch, register } from '../dispatcher/AppDispatcher';
import ProjectConstants from '../constants/ProjectConstants';

export default {
  findProject( project ) {
    dispatch({
      actionType: ProjectConstants.FIND_PROJECT, project
    })
  },
  createProject( project ){
    dispatch({
      actionType: ProjectConstants.CREATE_PROJECT, project
    })
  },
  deleteProject( project ){
    dispatch({
      actionType: ProjectConstants.DELETE_PROJECT, project
    })
  },
  updateProject( project ){
    dispatch({
      actionType: ProjectConstants.UPDATE_PROJECT, project
    })
  }
}