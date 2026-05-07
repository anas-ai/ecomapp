import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors.name';
import { moderateScale } from 'react-native-size-matters';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
type FontWeight = 'Regular' | 'Medium' | 'SemiBold' | 'Bold';

export type AppTextProps = {
  children: React.ReactNode;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  variant?: Variant;
  weight?: FontWeight;
};

const fontSize: Record<Variant, number> = {
  h1: 40,
  h2: 32,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 12,
  h8: 10,
};

const fontFamily: Record<FontWeight, string> = {
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
}: AppTextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          fontSize: moderateScale(fontSize[variant]),
          fontFamily: fontFamily[weight],
        },
        style,
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