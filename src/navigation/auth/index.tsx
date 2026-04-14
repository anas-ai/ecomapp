import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH_STACK } from '../routes';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {AUTH_STACK.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item?.name}
          component={item?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
