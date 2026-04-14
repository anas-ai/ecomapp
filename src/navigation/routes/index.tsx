import { ComponentType } from 'react';
import Home from '../../screens/home/home';
import {
  AUTH_SCREENS_NAME,
  HOME_SCREENS_NAME,
} from '../../constants/screen.names';
import WelcomeScreen from '../../screens/auth/welcome.screen';
import Signinscreen from '../../screens/auth/signin.screen';

export type MainStackParamsList = {
  home: undefined;
};

export type AuthStackParamList = {
  welcome: undefined;
  signin: undefined;
};
export type ScreenConfig<
  T extends keyof MainStackParamsList | keyof AuthStackParamList,
> = {
  name: T;
  component: ComponentType<any>;
};

export const MAIN_STACK: ScreenConfig<keyof MainStackParamsList>[] = [
  { name: HOME_SCREENS_NAME.HOME, component: Home },
];

export const AUTH_STACK: ScreenConfig<keyof AuthStackParamList>[] = [
  { name: AUTH_SCREENS_NAME.WELCOME_SCREENS, component: WelcomeScreen },
  { name: AUTH_SCREENS_NAME.SIGN_IN, component: Signinscreen },
  
];
