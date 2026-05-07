import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { spacing } from '../../styles/spacing';
import colors from '../../styles/colors';

type Props = {
  icon?: ImageProps;
  onPress?: () => void;
};
const SocialIcon = ({ icon, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image source={icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  iconStyle: { height: scale(50), width: scale(50) },
});
