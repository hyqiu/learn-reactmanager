import React, {Component} from 'react';
//import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyBtsZCzZGutCiJ8Z7pItJtdEOaR85jusqY",
    authDomain: "manager-4486d.firebaseapp.com",
    databaseURL: "https://manager-4486d.firebaseio.com",
    projectId: "manager-4486d",
    storageBucket: "",
    messagingSenderId: "490493914205"
    };

    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {},
      applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
