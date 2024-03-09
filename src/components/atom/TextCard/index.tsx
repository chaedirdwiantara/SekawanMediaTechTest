import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthResponsive} from '../../../utils';
import {Gap} from '..';
import {color} from '../../../theme';
import {mvs} from 'react-native-size-matters';

type Props = {
  title: string;
  value: string;
  linktype?: boolean;
};

const TextCard: React.FC<Props> = (props: Props) => {
  const {title, value, linktype} = props;

  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.titleConainer}>
        <Text style={styles.titleStyle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.textStyle}>:</Text>
      </View>
      <Gap width={15} />
      <View style={{flex: 1}}>
        {linktype ? (
          <Text style={styles.valueStyleLink} onPress={() => openURL(value)}>
            {value}
          </Text>
        ) : (
          <Text style={styles.valueStyle}>{value}</Text>
        )}
      </View>
    </View>
  );
};

export default TextCard;

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'row',
  },
  titleConainer: {
    width: widthResponsive(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: color.Neutral[10],
    fontSize: mvs(14),
    fontWeight: 'bold',
    flexShrink: 1,
  },
  textStyle: {
    color: color.Neutral[10],
    fontSize: mvs(14),
  },
  valueStyle: {
    color: color.Neutral[10],
    fontSize: mvs(14),
    flexShrink: 1,
    textAlign: 'justify',
  },
  valueStyleLink: {
    color: color.Primary[300],
    fontSize: mvs(14),
    flexShrink: 1,
    textDecorationLine: 'underline',
  },
});
