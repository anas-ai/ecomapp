import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, scale } from 'react-native-size-matters';
import AppButton from '../../components/atoms/AppButton';
import AppText from '../../components/atoms/AppText';
import { GET_STARTED_IMAGES } from '../../constants/images.name';
import colors from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const Getstarted = () => {
  <StatusBar
    translucent
    barStyle="light-content"
    backgroundColor="transparent"
  />;
  return (
    <>
      <ImageBackground
        source={GET_STARTED_IMAGES.GetStartedIMAGES}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: spacing.xl,
          paddingVertical: spacing.xxl,
        }}
      >
        <LinearGradient
          colors={[
            'transparent',
            'rgba(0,0,0,0.2)',
            'rgba(0,0,0,0.6)',
            'rgba(0,0,0,0.9)',
          ]}
          locations={[0, 0.6, 0.7, 1]}
          style={styles.overlay}
        />
        <View style={{ paddingBottom: spacing.xxl }}>
          <AppText
            variant="h2"
            weight="SemiBold"
            style={{
              color: colors.white,
              textAlign: 'center',
              fontSize: moderateScale(34),
            }}
          >
            You want Authentic, here you go!
          </AppText>
          <AppText
            variant="h6"
            weight="Regular"
            style={{ color: colors.white, textAlign: 'center' }}
          >
            Find it here, buy it now!
          </AppText>
        </View>

        <AppButton
          type="primary"
          title="Get Started"
          textStyle={{
            color: colors.white,
            fontSize: moderateScale(22),
            fontWeight: '600',
          }}
          buttonStyle={{
            width: '100%',
            maxWidth: 320,
            paddingVertical: spacing.sm,
            borderRadius: scale(4),
          }}
        />
      </ImageBackground>
    </>
  );
};

export default Getstarted;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
  },
});
