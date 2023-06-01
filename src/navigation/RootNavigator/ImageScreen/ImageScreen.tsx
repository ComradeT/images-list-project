import React, { FC, useState } from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { ImageScreenProps } from '../RootNavigator';
import { styles } from './styles';

const ImageScreen: FC<ImageScreenProps> = ({ route }) => {
  const { title, url } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <ImageBackground
      source={{ uri: url }}
      style={[styles.root, isLoading && { ...styles.rootLoading, backgroundColor: `#${randomColor}` }]}
      resizeMode="cover"
      onLoadStart={() => setIsLoading((prev) => !prev)}
      onLoadEnd={() => setIsLoading((prev) => !prev)}
    >
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.shadowContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default ImageScreen;
