import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import Template from '../../components/templates/Template';
import AuthForm from '../../components/organisms/auth.form';
import * as Icon from 'phosphor-react-native';
import SocialLogin from '../../components/molecules/SocialLogin';
import AuthSwitch from '../../components/atoms/AuthSwitch';
import { AUTH_SCREENS_NAME } from '../../constants/screen.names';
import { useAppNavigation } from '../../hooks/navigateTo';
import colors from '../../styles/colors';

const SignupScreen = () => {
  console.log('singscreen');
  console.log('signin screeen');
  const { navigateTo } = useAppNavigation();

  const [secure, setSecure] = useState<{
    password: boolean;
    confromPassword: boolean;
  }>({
    password: true,
    confromPassword: true,
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  const GoogleLogin = () => {
    console.log('google ');
  };

  const FaceBookLogin = () => {
    console.log('facebook ');
  };

  const goToForgotPassword = useCallback(() => {
    navigateTo(AUTH_SCREENS_NAME.FORGOT_PASSWORD);
  }, [navigateTo]);

  const goToLogin = useCallback(() => {
    navigateTo(AUTH_SCREENS_NAME.SIGN_IN);
  }, [navigateTo]);
  return (
    <Template>
      <AuthForm
        title={'Create an\nAccount'}
        fields={[
          {
            name: 'email',
            placeholder: 'Enter email',
            leftIcon: (
              <Icon.UserIcon size={28} weight="fill" color={colors.iconColor} />
            ),

            rules: {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            },
          },
          {
            name: 'password',
            placeholder: 'Password',
            leftIcon: (
              <Icon.LockIcon size={28} color={colors.iconColor} weight="fill" />
            ),
            rightIcon: secure.password ? (
              <Icon.EyeClosedIcon />
            ) : (
              <Icon.EyeIcon />
            ),
            secureTextEntry: secure.password,
            rules: {
              required: 'Password is required',
              minLength: {
                value: /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/,
                message:
                  'Password must contain 8 characters, 1 capital letter and 1 special character',
              },
            },
            onRightIconPress: () => {
              setSecure(prev => ({
                ...prev,
                password: !prev.password,
              }));
            },
          },
          {
            name: 'confirmPassword',
            placeholder: 'Confirm Password',
            leftIcon: (
              <Icon.LockIcon size={28} color={colors.iconColor} weight="fill" />
            ),
            rightIcon: secure.confromPassword ? (
              <Icon.EyeClosedIcon />
            ) : (
              <Icon.EyeIcon />
            ),
            onRightIconPress: () => {
              setSecure(prev => ({
                ...prev,
                confromPassword: !prev.confromPassword,
              }));
            },
            secureTextEntry: secure.confromPassword,
            rules: {
              required: 'Please confirm your password',
              minLength: {
                value: /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/,
                message:
                  'Password must contain 6 characters, 1 capital letter and 1 special character',
              },
            },
          },
        ]}
        socialLogin={
          <SocialLogin
            GoogleLogin={GoogleLogin}
            FaceBookLogin={FaceBookLogin}
          />
        }
        AuthSwitch={
          <AuthSwitch
            text="I Already Have An Account. "
            actionText="Login"
            SignUpPress={goToLogin}
          />
        }
        BtnTitle='Create Account'
        onSubmit={handleSubmit}
      />
    </Template>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
