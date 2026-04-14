import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/navigation/home';
import BootSplash from 'react-native-bootsplash';
import AuthNavigation from './src/navigation/auth';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer
      onReady={async () => await BootSplash.hide({ fade: true })}
    >
      {isLoggedIn ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
