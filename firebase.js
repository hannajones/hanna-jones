import Rebase from 're-base'

var base = Rebase.createClass('https://hannajones.firebaseio.com/'); //this is a reference to the firebase database

componentDidMount() {
  // AJAX request
  // in this case, firebase request
  base.syncState('/:path', {
    context : this,
    state : 'what I want to sync'
  }); // takes our react state and syncs it with the state in Firebase - two arguments, url path and object
 }