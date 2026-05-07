import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText, { AppTextProps } from './AppText';
import colors from '../../styles/colors';
import { spacing } from '../../styles/spacing';

type ButtonType = 'primary' | 'secondary' | 'text';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  type?: ButtonType;
  textStyle?: TextStyle;
  buttonStyle?:any
} & Omit<AppTextProps, 'children'>;

const AppButton = ({
  title,
  onPress,
  type = 'primary',
  textStyle,
  buttonStyle,
  ...textProps
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, type === 'primary' && styles.primaryButton,buttonStyle]}
    >
      <AppText {...textProps} style={[styles.text, textStyle]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: spacing.sm,
  },
  text: {
    color: colors.black,
  },
});
