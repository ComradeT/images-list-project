import { PhotoDto } from 'api/types';
import React, { FC, memo, useMemo, useState } from 'react';
import { Dimensions, TouchableOpacityProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from './styles';

type PhotoItemProps = TouchableOpacityProps & {
  item: PhotoDto;
};
const windowWidth = Dimensions.get('window').width;

const PhotoItem: FC<PhotoItemProps> = ({ item, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  const imageWidth = windowWidth / 3 - 1;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      key={item.id}
      style={[styles.imageContainer, randomBool && { height: imageWidth * 2 }]}
    >
      <FastImage
        style={styles.image}
        source={{ uri: item.url }}
        onLoadStart={() => setIsLoading((prev) => !prev)}
        onLoadEnd={() => setIsLoading((prev) => !prev)}
      >
        {isLoading && <ActivityIndicator />}
      </FastImage>
    </TouchableOpacity>
  );
};

export default memo(PhotoItem);
