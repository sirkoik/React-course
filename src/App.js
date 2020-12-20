import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a2abds52f', name: 'Alex', age: 35 },
      { id: 'z7b7zs57a', name: 'Doug', age: 40 }
    ],
    otherState: 'Another value',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // do NOT simply copy the array and assign a value
    // to a property of one of the sub-objects. Copy the
    // sub-object and assign to it. This is a deeper copy
    // that maintains the immutability of the state object.
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                onClick={() => {this.deletePersonHandler(index)}}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}></Person>
            );
          })}
        </div>        
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working.</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
