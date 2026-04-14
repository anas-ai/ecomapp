import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AppText, { textProps } from './AppText';
import { Colors } from '../../constants/colors.name';
import colors from '../../styles/colors';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
} & Omit<textProps, 'children'>;


const getBgVariant = (variant: string) => {
  switch (variant) {
    case 'primary':
      return Colors.primary;
    case 'secondary':
      return Colors.secondary;
    case 'success':
      return colors.green;
    case 'danger':
      return colors.red;
    default:
      return null;
  }
};

const AppButton = ({ title, onPress,...textProps}: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} >
      <AppText {...textProps}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
