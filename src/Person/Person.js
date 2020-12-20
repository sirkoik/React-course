import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.onClick}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;

// import React, { Component } from 'react';
// class Person extends Component {
//     render() {
//         return <p>I'm a person too!</p>
//     }
// }

// export default Person;