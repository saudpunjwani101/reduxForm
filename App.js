import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Form from './src/Form/form';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
    		<Form />
    	</Provider>
    );
  }
}

export default App;
