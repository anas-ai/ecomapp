import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { moderateScale, scale } from 'react-native-size-matters';

const AppInput = ({ placeholder, style, ...props }: TextInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      {...props}
      style={[styles.input, style]}
      
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    fontSize: moderateScale(12),
    
  },
});
