import {postsListProps} from '../interface/post.interface';
import baseApi from './base.api';

export const getPostListEP = async (): Promise<postsListProps[]> => {
  const {data} = await baseApi().request<postsListProps[]>({
    url: '/posts',
    method: 'GET',
  });

  return data;
};
