import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
      <Text style={textStyle}>Click Me!</Text>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderColor: '#007AFF',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#006AFF',
    fontSize: 16,
    fontWeight: '600'
  }
};

export default Button;
