import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../../../theme';
import {widthResponsive} from '../../../utils';
import {postsListProps} from '../../../interface/post.interface';

interface PostCardProps {
  data: postsListProps;
  onPress: () => void;
  disabled?: boolean;
}

const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
  const {data, onPress, disabled = false} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={disabled}>
      <Text style={styles.textStyle} numberOfLines={1}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    padding: widthResponsive(10),
    borderWidth: 1,
    borderColor: color.Pink[200],
    borderRadius: 10,
    marginBottom: widthResponsive(10),
    marginHorizontal: widthResponsive(10),
  },
  textStyle: {
    color: color.Neutral[10],
  },
});
