import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import ProjectForm from './ProjectForm'
import Rebase from 're-base'

//refactor to ES6
// var base = Rebase.createClass('https://hannajones.firebaseio.com/')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: {}
    }
  }
  // componentDidMount() {
  //   base.syncState()
  // }
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
