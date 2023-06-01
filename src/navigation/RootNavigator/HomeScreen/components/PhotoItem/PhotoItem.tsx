import { PhotoDto } from 'api/types';
import React, { FC, useMemo } from 'react';
import { Dimensions, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';

type PhotoItemProps = TouchableOpacityProps & {
  item: PhotoDto;
};

const PhotoItem: FC<PhotoItemProps> = ({ item, ...props }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  const windowWidth = Dimensions.get('window').width;

  const imageWidth = windowWidth / 3 - 1;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      key={item.id}
      style={[styles.imageContainer, randomBool && { height: imageWidth * 2 }]}
    >
      <FastImage style={styles.image} source={{ uri: item.url }} />
    </TouchableOpacity>
  );
};

export default PhotoItem;
