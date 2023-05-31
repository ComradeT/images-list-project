import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

export const DEFAULT_SCREEN_OPTIONS = {
  headerShown: false,
  cardShadowEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
} as StackNavigationOptions;
