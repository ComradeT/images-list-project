import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { LoginScreenProps } from '../root-navigator';
import { styles } from './styles';

const LoginScreen: FC<LoginScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
