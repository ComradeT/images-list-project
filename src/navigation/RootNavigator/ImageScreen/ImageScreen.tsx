import React, { FC } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { ImageScreenProps } from '../RootNavigator';
import { styles } from './styles';

const ImageScreen: FC<ImageScreenProps> = ({ route }) => {
  const { title, url } = route.params;

  return (
    <ImageBackground source={{ uri: url }} style={styles.root} resizeMode="cover">
      <View style={styles.shadowContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default ImageScreen;
