import React from 'react';
import {Item, Label, Input} from 'native-base';

const styles = {
  item: {
    margin:10,
    width:250
  }
}

const TextInput = (props) => {
  const { input, meta} = props;
  return (
    meta.visited && !meta.dirty ?
      <Item floatingLabel style={styles.item} error>
        <Label style={{color:"red"}}>{input.name}</Label>
        {inputField(input)}
      </Item> :
      <Item floatingLabel style={styles.item}>
        <Label>{input.name}</Label>
        {inputField(input)}
      </Item>
  )
}

const inputField = (input) =>
  <Input
    onChangeText={input.onChange}
    onBlur={input.onBlur}
    onFocus={input.onFocus}
    value={input.value}
  />

export default TextInput;
