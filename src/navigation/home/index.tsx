import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MAIN_STACK } from '../routes';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {MAIN_STACK.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item?.name}
          component={item?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
