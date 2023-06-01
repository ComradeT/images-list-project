import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import AppRoutes from '../routes';
import { DEFAULT_SCREEN_OPTIONS } from '../navigator.options';
import { RouteProp } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';

const Stack = createStackNavigator<UserNavigatorParams>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoutes.LoginScreen}>
      <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <Stack.Screen name={AppRoutes.HomeScreen} component={HomeScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <Stack.Screen name={AppRoutes.ImageScreen} component={ImageScreen} options={DEFAULT_SCREEN_OPTIONS} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

export type UserNavigatorParams = {
  [AppRoutes.LoginScreen]: undefined;
  [AppRoutes.HomeScreen]: undefined;
  [AppRoutes.ImageScreen]: { url: string; title: string };
};

export interface LoginScreenProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.LoginScreen>;
  route: RouteProp<UserNavigatorParams, AppRoutes.LoginScreen>;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.HomeScreen>;
  route: RouteProp<UserNavigatorParams, AppRoutes.HomeScreen>;
}

export interface ImageScreenProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.ImageScreen>;
  route: RouteProp<UserNavigatorParams, AppRoutes.ImageScreen>;
}
