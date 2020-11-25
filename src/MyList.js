import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'

class MyList extends Component {

  state = {
    toDoItemsArray: this.props.theList
  }

  clearList = () => {
    this.setState({
      toDoItemsArray: [],
      newItem: ''
    })
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    //when a form is submitted, the whole page will reload, to prevent this, pass the onClick associated with the addItem method an event so that we can then call preventDefault on e
    e.preventDefault();
    this.setState({
      toDoItemsArray: [...this.state.toDoItemsArray, this.state.newItem]
    })
  }

  render() {
    let todoItems = this.state.toDoItemsArray.map((item, i) => (
      <ListItem doThis={item} key={'todo' + i} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
  
        <ul>
          {todoItems}
        </ul>

        <form>
        {/* We can use onChange on the input field to trigger an event when the text in the box is changed. */}
          <input type='text' placeholder='Type and item here' onChange={(event) => this.newItemChange(event)} value={this.state.newItem}></input>
          <button onClick={(event) => this.addItem(event)}>Add item</button>
        </form>

        <button onClick={this.clearList}>Clear List</button>
        
      </div>
    )
  }
}

export default MyList
