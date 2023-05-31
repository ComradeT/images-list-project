import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './root-navigator/root-navigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
