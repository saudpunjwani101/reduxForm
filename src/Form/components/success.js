import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
  container: {
    flex:1, justifyContent:"center", alignItems:"center"
  },
  icon: {
    color:"green",fontSize:100
  }
}

const SuccessMsg = (props) =>
  <View style={styles.container}>
    <Text>Success</Text>
    <Icon name="ios-checkmark-circle-outline" style={styles.icon}/>
    <Text onPress={props.setOnSwip.bind(this,false)}>Try Again</Text>
  </View>


export default SuccessMsg;
