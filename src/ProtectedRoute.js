import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class ProtectedRoute extends Component {

    componentDidMount(){
        
    }

    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            (localStorage.getItem('token')) ?
              <Component {...props} /> :
              <Redirect to='/login' />
          )} 
        />
      )
    }
  }

export default ProtectedRoute;