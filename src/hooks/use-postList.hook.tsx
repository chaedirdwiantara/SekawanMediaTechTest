import {useState} from 'react';
import {postsListProps} from '../interface/post.interface';
import {getPostListEP} from '../api/listPosts.api';

export const useListPostsHook = () => {
  const [listPosts, setListPosts] = useState<postsListProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getListPosts = async () => {
    setIsLoading(true);
    try {
      const response = await getPostListEP();
      setListPosts(response);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    listPosts,
    getListPosts,
  };
};
