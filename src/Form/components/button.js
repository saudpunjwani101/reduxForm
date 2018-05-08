import React from 'react';
import {Text,View,TouchableOpacity, Platform} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomButton = ({title, onSubmit}) =>
  <TouchableOpacity style={styles.buttons} onPress={onSubmit}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>

const styles = {
  buttonText: {
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios' ) ? 'Gill Sans' :'sans-serif-light',
    color: 'white'
  },
  buttons: {
    justifyContent:'center',
    flexDirection:'row',
    padding:10,
    width:280,
    marginTop:8,
    borderRadius:10,
    backgroundColor:'#EC430C',
  }
}

export default CustomButton;
