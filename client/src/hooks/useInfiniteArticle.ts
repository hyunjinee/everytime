import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store/index';
import { getAllArticles } from '@/store/article/action';

const useInfiniteArticle = () => {
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.article);

  useEffect(() => {
    if (message !== 'No more articles') {
      dispatch(getAllArticles(page));
    }
    setIsLoading(false);
  }, [page, dispatch]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
  }, [target]);

  const getMoreArticle = () => {
    setIsLoading(true);
    setPage((page) => page + 1);
  };

  const onIntersect = ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      getMoreArticle();
      observer.observe(entry.target);
    }
  };

  return [ setTarget, isLoading ];
};

export default useInfiniteArticle;
