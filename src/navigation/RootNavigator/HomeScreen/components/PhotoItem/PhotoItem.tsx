import React from 'react';
import { PhotoDto } from 'api/types';
import { FC, useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';

const PhotoItem: FC<{ item: PhotoDto }> = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  const windowWidth = Dimensions.get('window').width;

  const imageWidth = windowWidth / 3 - 1;

  return (
    <View key={item.id} style={[styles.imageContainer, randomBool && { height: imageWidth * 2 }]}>
      <FastImage style={styles.image} source={{ uri: item.url }} />
    </View>
  );
};

export default PhotoItem;
