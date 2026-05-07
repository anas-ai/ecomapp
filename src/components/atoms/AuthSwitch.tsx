import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';
import AppText from './AppText';
import { moderateScale } from 'react-native-size-matters';

type props = {
  text?: string;
  actionText: string;
  SignUpPress?: () => void;
};

const AuthSwitch = ({ text, actionText, SignUpPress }: props) => {
  return (
    <View style={styles.container}>
      <AppText variant="h6" weight="Medium" style={{ color: colors.greyColor }}>
        {text}
      </AppText>
      <TouchableOpacity activeOpacity={0.8} onPress={SignUpPress}>
        <AppText variant="h6" weight="Bold" style={styles.actionTextStyle}>
          {actionText}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  actionTextStyle: { color: colors.primary, textDecorationLine: 'underline' },
});
