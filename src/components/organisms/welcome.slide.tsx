import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../atoms/AppText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/colors.name';

const WelcomeSlide = ({ item }: any) => {
  if (!item) return null;
  return (
    <View style={[styles.container]}>
      <Image source={item.image}  />
      <AppText variant="h2" weight="Bold">
        {item?.title}
      </AppText>
      <AppText
        variant="h6"
        weight="SemiBold"
        style={{
          textAlign: 'center',
          color: Colors.secondary_text,
          lineHeight: verticalScale(16),
        }}
        numberOfLines={3}
      >
        {item?.description}
      </AppText>
    </View>
  );
};

export default WelcomeSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: verticalScale(20),
  },
  image: {
    flex:1,
    height: verticalScale(250),
    width: scale(200),
    resizeMode:'contain'
  },
});
