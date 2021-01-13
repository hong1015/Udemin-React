//import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import "./Person/Person";
import Person from "./Person/Person.js";

// function App() {
// const [personsState, setPersonsState] = useState({
//   persons: [
//     {name: 'bobState', age: 55},
//     {name: 'efe', age: 5},
//     {name: 'tt', age: 36}
//   ]
// });
//   const [otherState, setOtherState] = useState('dfefj somthing?');
//  const switchNameHandler = () =>{
//    //this relace old state
//    setPersonsState({
//     persons: [
//       {name: 'bobby', age: 15},
//       {name: 'efe', age: 5},
//       {name: 'tt', age: 16}
//     ]
//    });
//   }
//   return (
//     <div className="App">
//       <h1>yy ff ffe</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} ><p>?f fb</p></Person>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { id: 's12', name: "bob", age: 55 },
      { id: 'fg3', name: "efe", age: 5 },
      { id: '7yr4', name: "tt", age: 36 },
    ],
    showPerson: false,
  };

  nameChangeHandler = (event, id) => {
    const personsArr = [...this.state.persons];
    const personsIndex = personsArr.findIndex(p => {
      return p.id === id
    });
    const person = personsArr[personsIndex];
    person.name = event.target.value;
  
    personsArr[personsIndex] = person;
    this.setState({
      persons: personsArr
    });
  };

  togglePersonsHandler = () => {
    const isShown = this.state.showPerson;
    this.setState({
      showPerson: !isShown,
    });
  };

  deletePersonHandler = (personIndex) => {
    const personsArr = [...this.state.persons];

    personsArr.splice(personIndex, 1);
    this.setState({
      persons: personsArr,
    });
  };
  // another way not the best, onClick={() => this.switchNameHandler('new thng')} use it when have to
  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>yy ff ffe</h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;
