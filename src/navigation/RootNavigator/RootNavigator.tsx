import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { DEFAULT_SCREEN_OPTIONS } from '../navigator.options';
import AppRoutes from '../routes';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';

const Stack = createStackNavigator<RootNavigatorParams>();

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

export type RootNavigatorParams = {
  [AppRoutes.LoginScreen]: undefined;
  [AppRoutes.HomeScreen]: undefined;
  [AppRoutes.ImageScreen]: { url: string; title: string };
};

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootNavigatorParams, AppRoutes.LoginScreen>;
  route: RouteProp<RootNavigatorParams, AppRoutes.LoginScreen>;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootNavigatorParams, AppRoutes.HomeScreen>;
  route: RouteProp<RootNavigatorParams, AppRoutes.HomeScreen>;
}

export interface ImageScreenProps {
  navigation: StackNavigationProp<RootNavigatorParams, AppRoutes.ImageScreen>;
  route: RouteProp<RootNavigatorParams, AppRoutes.ImageScreen>;
}
