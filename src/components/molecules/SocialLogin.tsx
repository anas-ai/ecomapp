import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SocialIcon from '../atoms/SocialIcon';
import { SOCIAL_LOGIN_ICONS } from '../../constants/images.name';
import AppText from '../atoms/AppText';
import { spacing } from '../../styles/spacing';
import { scale } from 'react-native-size-matters';

type socailPress ={
  GoogleLogin?:()=>void;
  FaceBookLogin?:()=>void;
}


const SocialLogin = ({GoogleLogin,FaceBookLogin}:socailPress) => {
  return (
    <View style={style.contianer}>
      <AppText variant="h5" weight="Medium">
        - OR Continue with -
      </AppText>
      <View style={style.iconContainer}>
        <SocialIcon icon={SOCIAL_LOGIN_ICONS.Google} onPress={GoogleLogin} />
        <SocialIcon icon={SOCIAL_LOGIN_ICONS.Facebook} onPress={FaceBookLogin} />
      </View>
    </View>
  );
};

export default SocialLogin;

const style = StyleSheet.create({
  contianer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: spacing.xxl,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: spacing.xl,
    gap: scale(30),
  },
});
