import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {LoadingIndicator, PostCard, TopNavigation} from '../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations';
import {useListPostsHook} from '../hooks/use-postList.hook';
import {postsListProps} from '../interface/post.interface';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {isLoading, getListPosts, listPosts} = useListPostsHook();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getListPosts();
  }, []);

  useEffect(() => {
    if (refreshing) {
      getListPosts();
    }
  }, [refreshing]);

  useEffect(() => {
    if (!isLoading) {
      setRefreshing(false);
    }
  }, [isLoading]);

  const handleOnPress = (item: postsListProps) => {
    navigation.navigate('DetailPost', {data: item});
  };

  return (
    <View style={styles.container}>
      <TopNavigation.Type2
        title="Post List"
        itemStrokeColor={color.Neutral[10]}
      />
      <View style={styles.bodyContainer}>
        {refreshing && (
          <View style={styles.loadingContainer}>
            <LoadingIndicator size="small" />
          </View>
        )}
        <FlatList
          data={listPosts}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={{width: '100%'}}>
              <PostCard data={item} onPress={() => handleOnPress(item)} />
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }
        />
        {isLoading && <LoadingIndicator size="small" />}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  titleStyle: {
    color: color.Neutral[10],
  },
  listContainer: {
    marginTop: widthResponsive(20),
  },
  textStyle: {
    color: color.Neutral[10],
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: widthResponsive(20),
  },
});
