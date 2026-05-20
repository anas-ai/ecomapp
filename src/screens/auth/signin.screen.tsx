import React, { useCallback, useState } from 'react';
import Template from '../../components/templates/Template';
import AuthForm from '../../components/organisms/auth.form';
import * as Icon from 'phosphor-react-native';
import SocialLogin from '../../components/molecules/SocialLogin';
import AuthSwitch from '../../components/atoms/AuthSwitch';
import { useAppNavigation } from '../../hooks/navigateTo';
import { AUTH_SCREENS_NAME } from '../../constants/screen.names';

const Signinscreen = () => {
  console.log('singscreen');
  console.log('signin screeen');
  const { navigateTo } = useAppNavigation();

  const [secure, setSecure] = useState(true);

  const handleSubmit = (data: any) => {
    console.log(data);
    navigateTo(AUTH_SCREENS_NAME.GETSTARTED)
  };
  const GoogleLogin = () => {
    console.log('google ');
  };

  const FaceBookLogin = () => {
    console.log('facebook ');
  };

  const goToForgotPassword = useCallback( () => {
  navigateTo(AUTH_SCREENS_NAME.FORGOT_PASSWORD);
},[navigateTo]);

const goToSignup = useCallback(() => {
  navigateTo(AUTH_SCREENS_NAME.SIGN_UP);
}, [navigateTo]);
  return (
    <Template>
      <AuthForm
        title={"Welcome\nBack!"}
        fields={[
          {
            name: 'email',
            placeholder: 'Enter email',
            leftIcon: <Icon.UserIcon size={28} />,
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
            leftIcon: <Icon.LockLaminatedIcon size={28} />,
            rightIcon: secure ? <Icon.EyeClosedIcon /> : <Icon.EyeIcon />,
            secureTextEntry: secure,
            rules: {
              required: 'Password is required',
              minLength: {
                value: /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/,
                message: 'Minimum 6 characters required',
              },
            },
            onRightIconPress: () => setSecure(!secure),
          },
        ]}
        forgotPasswordText={goToForgotPassword}
        socialLogin={
          <SocialLogin
            GoogleLogin={GoogleLogin}
            FaceBookLogin={FaceBookLogin}
          />
        }
        AuthSwitch={
          <AuthSwitch
            text="Create An Account"
            actionText="Sign Up"
            SignUpPress={goToSignup}
          />
        }
        BtnTitle='Login'
        onSubmit={handleSubmit}
      />
    </Template>
  );
};

export default Signinscreen;
