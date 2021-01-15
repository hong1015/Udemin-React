import React, {Component, Fragment} from 'react';
import './Person.css';
import PropsTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
// import Aux from '../../../hoc/Auxiliary'//can use build in function, Fragment whihc is the same thing
class Persons extends Component {

constructor(props){
    super(props);
    this.inputElementRef = React.createRef(); // newer way, v16.5 +
}

static contextType = AuthContext; //contextType belong to React, use when wanting the conext outside of render

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated); // call like this
    }
    render(){
        return (
            <Fragment>
                {this.context.authenticated ? <p>login!</p>: <p>nope</p>}
                {/* <AuthContext.Consumer>
                    {(context)=>context.authenticated ?
                     <p>login!</p>: <p>nope</p>
                }
                </AuthContext.Consumer> old way*/}

                <div className="Person">
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                     onChange={this.props.changed} 
                     value={this.props.name} 
                     type="text"/>
                </div>
            </Fragment>
        )
    }
};

Persons.propsTypes = {
    click: PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
}
export default Persons;