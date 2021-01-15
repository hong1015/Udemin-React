import React, {Component} from 'react';

import  Person from './Person/Person';

//PureComponent - is Component + shouldComponentUpdate, which check all props changes
class Persons extends Component {

  // static getDerivedStateFromProps(props, state){
  //   console.log('persons.js dived')
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[persons] shouldComponentUpdate, only run when props are different'  )
  //   //only use if want to check update 
  //   if(nextProps.persons === this.props.persons ){
  //     return false
  //   } 
  //   return true;

  // }

  getSnapshotBeforeUpdate(pervProps, prevState){
    console.log('[persons] getSnapshotBeforeUpdate, last min dom change'  )
    return {message: 'snapshot'}
  }
  componentDidUpdate(pervProps, prevState,snapshot ){
    console.log('[persons] componentDidUpdate', snapshot  )
  }
  componentWillUnmount(){
    console.log('[persons], componentWillUnmount, any code here will run right before the component is removed')
  }
  render(){
    return this.props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        isAuth={this.props.isAuthenticated}
      />
    );
  })
  }
}


export default Persons;