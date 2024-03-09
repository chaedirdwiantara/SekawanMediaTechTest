import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../../theme';
import {mvs} from 'react-native-size-matters';
import {widthResponsive} from '../../../utils';
import {Gap, TextCard} from '../..';

type Props = {
  title: string;
  value: string;
};

const DetailCard: React.FC<Props> = (props: Props) => {
  const {title, value} = props;
  return (
    <View>
      <TextCard title={'Title'} value={title} />
      <TextCard title={'Desc'} value={value} />
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({});
