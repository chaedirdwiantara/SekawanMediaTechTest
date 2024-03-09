import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {Gap, TextCard, TopNavigation} from '../components';
import {widthResponsive} from '../utils';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TopNavigation.Type2
        title="Profile"
        itemStrokeColor={color.Neutral[10]}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/picture/Chaedir.jpg')}
            style={styles.circle}
          />
        </View>
        <Gap height={20} />
        <TextCard title={'Name'} value={'Andi Chaedir Dwiantara Mappiare'} />
        <TextCard title={'Role'} value={'Mobile Developer'} />
        <TextCard title={'Domisili'} value={'Bogor, Indonesia'} />
        <TextCard
          title={'Skills'}
          value={
            'React Native, JavaScript, TypeScript, Redux Saga, Redux Thunk, Zustand, Flutter, Dart, Bloc, Git, Agile, ...'
          }
        />
        <Gap height={20} />
        <TextCard
          title={'LinkedIn'}
          value={'www.linkedin.com/in/chaedir-dwiantara'}
          linktype
        />
        <Gap height={10} />
        <TextCard
          title={'Github'}
          value={'https://github.com/chaedirdwiantara'}
          linktype
        />
        <Gap height={10} />
        <TextCard
          title={'CV'}
          value={
            'https://drive.google.com/file/d/1OHiJ4vtS4sAK5E1LE_0_mQrDIit9G5CD/view?usp=sharing'
          }
          linktype
        />
        <Gap height={10} />
        <TextCard
          title={'Portofolio'}
          value={
            'https://drive.google.com/file/d/1v5nyc-7_IQ4lWdcHketoji8nZ__ikjcv/view?usp=sharing'
          }
          linktype
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  circle: {
    width: widthResponsive(100),
    height: widthResponsive(100),
    borderRadius: 50,
    borderWidth: 4,
    borderColor: color.Dark[200],
  },
});
