import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { HomeScreenProps } from '../RootNavigator';
import { styles } from './styles';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
