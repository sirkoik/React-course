import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 35 },
      { name: 'Doug', age: 40 }
    ],
    otherState: 'Another value'
  }

  switchNameHandler = (nameToChange) => {
    console.log('was clicked');
    // DON't DO THIS this.state.persons[0].name="John";
    this.setState({
      persons: [
        { name: nameToChange, age: 36 },
        { name: 'Douglas', age: 42 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 36 },
        { name: 'Douglas', age: 42 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working.</p>
        <button style={style} onClick={() => this.switchNameHandler('Alex.')}>Switch name</button>
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age }
          onClick={this.switchNameHandler.bind(this, 'Alexander')}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          onClick={this.switchNameHandler.bind(this, 'A')}
        >
          I like to go skiing.
        </Person>
      </div>
    );
  }
}

export default App;
