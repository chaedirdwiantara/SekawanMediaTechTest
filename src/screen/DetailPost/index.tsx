import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {color} from '../../theme';
import {widthResponsive} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigations';
import {mvs} from 'react-native-size-matters';
import {DetailCard, LoadingIndicator, TopNavigation} from '../../components';

type PostDetailProps = NativeStackScreenProps<RootStackParams, 'DetailPost'>;

const DetailPost = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const data = route.params.data;

  const leftIconOnPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TopNavigation.Type1
        title="Detail Post"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />

      <View style={styles.bodyContainer}>
        <DetailCard title={data.title} value={data.body} />
      </View>
    </View>
  );
};

export default DetailPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  textStyle: {
    fontSize: mvs(13),
    color: color.Neutral[10],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
});
