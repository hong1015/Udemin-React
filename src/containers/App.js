import React, { Component, Fragment } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClassFunction from '../hoc/withClassFunction';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor ', props)
  }
  state = {
    persons: [
      { id: "s12", name: "bob", age: 55 },
      { id: "fg3", name: "efe", age: 5 },
      { id: "7yr4", name: "tt", age: 36 },
    ],
    showPerson: false,
    showCockpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps, sync state ', props, state)
    return state
  }

  componentDidMount(){
    console.log('componentDidMount app, http call if need to')
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate app, should this function contiune')
    return true;
  }
  componentDidUpdate(){
    console.log('componentDidUpdate app, http call if need to update')
  }
  
  nameChangeHandler = (event, id) => {
    const personsArr = [...this.state.persons];
    const personsIndex = personsArr.findIndex((p) => {
      return p.id === id;
    });
    const person = personsArr[personsIndex];
    person.name = event.target.value;

    personsArr[personsIndex] = person;
    this.setState((prevState, props) =>{
      //this can be use when want to use the previous state value
      return {
        persons: personsArr,
      }
    });
  };

  togglePersonsHandler = () => {
    const isShown = this.state.showPerson;
    this.setState({
      showPerson: !isShown,
    });
  };
  loginHandler = () =>{
    this.setState({
      authenticated: true
    })
  };

  deletePersonHandler = (personIndex) => {
    const personsArr = [...this.state.persons];

    personsArr.splice(personIndex, 1);
    this.setState({
      persons: personsArr,
    });
  };
  
  render() {
    console.log('?? render ')
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }
    return (
      <Fragment>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}>Remove Cockpit</button>
        <h3>whatever text dont need auth</h3>
        <AuthContext.Provider value={
          {authenticated: this.state.authenticated,
          login: this.loginHandler} 
        }>
          {
            this.state.showCockpit ? (
              <Cockpit
              clicked={this.togglePersonsHandler}
              isPersonsShown={this.state.showPerson}
              personsLength={this.state.persons.length}
              title={this.props.appTitle}
            ></Cockpit>
            ) : null
          }
       
        {person}
        </AuthContext.Provider>
      </Fragment>
    );
  }


}

export default withClassFunction(App, 'App');
