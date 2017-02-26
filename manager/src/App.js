import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBR4FTGiOcTZ5OBNi6thE0KhCDR3PaOtQM',
      authDomain: 'manager-2328b.firebaseapp.com',
      databaseURL: 'https://manager-2328b.firebaseio.com',
      storageBucket: 'manager-2328b.appspot.com',
      messagingSenderId: '193075244299'
    };

    firebase.initializeApp(config);
  }

  render() {
    //reduxThink = asynchronis data fetching
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    //all that is called is the prodvider (react-redux), see file Router
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
