import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyApp from './components/myApp';
import reducer from './store/reducer';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp/> 
      </Provider>
    )
  }
}

export default App;