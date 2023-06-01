import MasonryList from '@react-native-seoul/masonry-list';
import { PhotoDto } from 'api/types';
import { useAsyncAction } from 'hooks';
import AppRoutes from 'navigation/routes';
import React, { FC, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { actions, selectors, useAppSelector } from 'store';
import { HomeScreenProps } from '../RootNavigator';
import { PhotoItem } from './components';
import { styles } from './styles';

const keyExtractor = (item: PhotoDto) => String(item.id);

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [getPhotosAction, isPhotosLoading] = useAsyncAction(actions.photos.getPhotos);
  const photos = useAppSelector(selectors.photos.selectPhotos);

  const getPhotos = async () => {
    try {
      await getPhotosAction();
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (url: string, title: string) => {
    navigation.navigate(AppRoutes.ImageScreen, { url, title });
  };

  return (
    <View style={styles.root}>
      {isPhotosLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <MasonryList
          data={photos || []}
          contentContainerStyle={styles.scrollContainer}
          renderItem={({ item }: { item: PhotoDto }) => (
            <PhotoItem onPress={() => handleNavigate(item.url, item.title)} key={item.id} item={item} />
          )}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          removeClippedSubviews={false}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
};

export default HomeScreen;
