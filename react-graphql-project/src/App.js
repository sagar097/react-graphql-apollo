import './App.css';

import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launch from './component/Launch';
import Launches from './component/Launches';
import logo from './spaceX.jpg';

const client = new ApolloClient({
    uri: '/graphql'
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
      <div className="container">
       <img src={logo} alt="SpaceX"
        style={{ width: 300, 
            display:'block',
            margin:'auto'}}
       />
        <Route exact path="/" component={Launches}/>
       <Route exact path="/launch/:flight_number" component={Launch}/>
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
