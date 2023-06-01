import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  shadowContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
