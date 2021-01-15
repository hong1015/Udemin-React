import React, { Component } from "react";

class ErrorBoundary extends Component{ 
    state = {
        isError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({
            isError: true,
        errorMessage: error
        })
    }
    
        render(){
            if(this.state.isError){
                  return <h1>{this.state.errorMessage}</h1>;
            } else{
                return this.props.children;
            }
        }
  


}
export default ErrorBoundary;