import React from 'react';

class ProjectForm extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <form>
            <input type="text" ref="title" placeholder="title"/><br/>
            <textarea name="description" id="description" cols="30" rows="10"></textarea><br/>
            <input type="text" ref="image1" placeholder="image 1"/><br/>
            <input type="text" ref="image1" placeholder="image 2"/><br/>
            <input type="text" ref="image1" placeholder="image 3"/><br/>
            <input type="text" ref="image1" placeholder="image 4"/><br/>
            <input type="text" ref="image1" placeholder="image 5"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectForm