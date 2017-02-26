import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

//the same for ios and android, so cannot use native components

class App extends Component {
  state = { loggedIn: null };
//initial state is "null", so netiehr loggedIn true or false!
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
      authDomain: 'authentication-70a18.firebaseapp.com',
      databaseURL: 'https://authentication-70a18.firebaseio.com',
      storageBucket: 'authentication-70a18.appspot.com',
      messagingSenderId: '682333809338'
      //connects to firebase database (setup required, see udemy lecture for details)
    });
//built in firebase functions, if authentication state changes the if/else functions
//is called. so if user (is true) then set the state of this component (App) to true
//else set it to false
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
//helper function
  renderContent() {
    //switch statement, three cases "true, false, default"
    //true is called if the state of this (App), so this.state.loggedIn === true
    //"case true" if user is logged in then logout button should be shown, that
    //has the onpress function of "signout from firebase"
    //if user is not logged in then the LoginForm should be shown (that component)
    //itself as a button/spinner in placeholder
    //on default a spinner is returned
    //having this render.content function with switch cases cleans up code, no messy
    //if else statements needed
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
//basic function, always required. returns a view with prop "headerText"
//helper function is called
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
