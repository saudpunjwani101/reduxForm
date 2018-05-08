import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import {View, Text, Tou} from 'react-native';

import TextInput from './components/textInput';
import Button from './components/button';

class FormBox extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Field
          name={'Rent'}
          component={TextInput}
        />
        <Field
          name={'Tenant'}
          component={TextInput}
        />
        <Field
          name={'LandLord'}
          component={TextInput}
        />

        <Button title={"Submit"} onSubmit={this.props.handleSubmit}  />
      </View>
    );
  }
}

export default reduxForm({
  form: 'signIn' ,
  validate: (values) => {
    const errors = {};
    errors.Rent = !values.Rent
    ? 'Rent is required'
    : undefined

    errors.Tenant = !values.Tenant
    ? 'Tenant is required'
    : undefined

    errors.LandLord = !values.LandLord
    ? 'LandLord is required'
    : undefined

    return errors
  }
})(FormBox);
