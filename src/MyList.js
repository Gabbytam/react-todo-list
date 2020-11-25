import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, i) => (
      <ListItem doThis={item} key={'todo' + i} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
  
        <ul>
          {todoItems}
        </ul>

        <div>
          <input type='text' placeholder='Type an item here'></input>
          <button id='addLi'>Add it!</button>
        </div>
    
        <input type='Submit' value='Finished List!'></input>
        
      </div>
    )
  }
}

export default MyList
