import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import Modal from "react-native-modal";

const styles = {
  container: {
    flex:1,justifyContent:"flex-end"
  },
  swipeText: {
    textAlign:"center",margin:20, fontWeight:'500',fontSize:20,color:"white"
  }
}

const ConfirmModal = (props) =>
  <View style={{flex:1}}>
    <Modal isVisible={props.submitted}
      swipeDirection={"up"}
      swipeThreshold={50}
      onSwipe={props.setOnSwip.bind(this,true)}>
      <View style={styles.container}>
        <Text style={styles.swipeText}>
          Swipe Up To Confirm
        </Text>
        <Text style={{backgroundColor:"white",padding:5}}
          onPress={props.modalOpen.bind(this, false)}>
          Cancel
        </Text>
      </View>
    </Modal>
  </View>

export default ConfirmModal;
