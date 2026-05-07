import {
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedbackBase,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppInput from '../atoms/AppInput';
import AppText from '../atoms/AppText';
import colors from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { moderateScale, scale } from 'react-native-size-matters';

type Props = {
  label?: string | boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  error?: string;
} & TextInputProps;

const InputField = ({
  // label = false,
  leftIcon,
  rightIcon = false,
  onRightIconPress,
  error,
  ...props
}: Props) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          { borderColor: colors.black, borderWidth: 0.5 },
          error && styles.errorBorder,
        ]}
      >
        {leftIcon && <View>{leftIcon}</View>}
        <AppInput
          {...props}
          placeholderTextColor={colors.bgBlack}
          style={{ flex: 1 }}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <AppText variant="h8" weight="Regular" style={styles.errorText}>
          {error}
        </AppText>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBg,
    borderRadius: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    marginTop: spacing.sm,
  },
});
