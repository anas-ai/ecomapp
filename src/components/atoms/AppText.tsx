import { StyleSheet, Text, TextStyle, View, ViewProps } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors.name';
import { moderateScale } from 'react-native-size-matters';

export type textProps = {
  children: React.ReactNode;
  numberOfLines?: number;
  style?: TextStyle;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
  weight?: 'Regular' | 'Medium' | 'SemiBold' | 'Bold';
};

const fontSize = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 12,
  h8: 10,
};

const fontFamily: Record<string, string> = {
  Regular: 'Montserrat-Regular',
  Medium: 'Montserrat-Medium',
  SemiBold: 'Montserrat-SemiBold',
  Bold: 'Montserrat-Bold',
};

const AppText = ({
  children,
  numberOfLines,
  style,
  variant = 'h8',
  weight = 'Regular',
}: textProps) => {
  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : undefined}
      style={[
        styles.text,
        style,
        {
          fontSize: moderateScale(fontSize[variant]),
          fontFamily: fontFamily[weight],
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
});
