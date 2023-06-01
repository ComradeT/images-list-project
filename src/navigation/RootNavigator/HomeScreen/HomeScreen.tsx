import MasonryList from '@react-native-seoul/masonry-list';
import { api } from 'api';
import { PhotoDto } from 'api/types';
import AppRoutes from 'navigation/routes';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { HomeScreenProps } from '../RootNavigator';
import { PhotoItem } from './components';
import { styles } from './styles';

const keyExtractor = (item: PhotoDto) => String(item.id);

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [photos, setPhotos] = useState<PhotoDto[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPhotos = async () => {
    setIsLoading(true);
    try {
      const response = await api.getPhotos();
      setPhotos(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleNavigate = (url: string, title: string) => {
    navigation.navigate(AppRoutes.ImageScreen, { url, title });
  };

  return (
    <View style={styles.root}>
      {isLoading ? (
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
