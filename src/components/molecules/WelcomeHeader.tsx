import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../atoms/AppText';
import { slides } from '../../constants/onboarding.data';
import AppButton from '../atoms/AppButton';
import { Colors } from '../../constants/colors.name';

const WelcomeHeader = ({ index, onSkip }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText variant="h6" weight="Bold">
          {index + 1}
        </AppText>

        <AppText variant="h6">{' / '}</AppText>
        <AppText
          variant="h6"
          weight="Bold"
          style={{ color: Colors.secondary_text }}
        >
          {slides.length}
        </AppText>
      </View>

      <AppButton title="Skip" variant="h5" weight="Bold" onPress={onSkip} />
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: { flexDirection: 'row', alignItems: 'center' },
});
