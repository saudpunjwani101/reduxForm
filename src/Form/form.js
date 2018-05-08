import React, { Component } from 'react';
import {View, Text, Alert} from 'react-native';

import FormBox from './formBox';
import Modal from './components/confirmationModal';
import SuccessMessage from './components/success';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      swiped:false
    }
    
    this.modalOpen = this.modalOpen.bind(this);
    this.setOnSwip = this.setOnSwip.bind(this);
  }

  async modalOpen(bool) {
    await this.setState({submitted:bool});
  }

  async setOnSwip(bool) {
    this.modalOpen(false);
    await this.setState({swiped:bool})
  }

  render() {
    return (
        this.state.swiped ?
          <SuccessMessage setOnSwip={this.setOnSwip}/>
          :
          <View style={{flex:1}}>
            <FormBox onSubmit={(values) => this.modalOpen(true)}/>
            <Modal
            submitted={this.state.submitted}
            swiped={this.state.swiped}
            modalOpen={this.modalOpen}
            setOnSwip={this.setOnSwip}
            />
          </View>
    );
  }
}

export default Form;
