import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const imageWidth = windowWidth / 3 - 1;

export const styles = StyleSheet.create({
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
