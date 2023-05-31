import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ImageScreenProps } from '../root-navigator';
import { styles } from './styles';

const ImageScreen: FC<ImageScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>ImageScreen</Text>
    </View>
  );
};

export default ImageScreen;
