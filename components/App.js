import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import ProjectForm from './ProjectForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  loadSamples(e) {
    e.preventDefault()
    this.setState({
      projects: require('../scripts/data.js')
    })
  }
  render() {
    return (
      <div>
        <ProjectsContainer loadSamples={this.loadSamples.bind(this)} projects={this.state.projects}/>
        <ProjectForm/>
      </div>
    )
  }
}

export default App
