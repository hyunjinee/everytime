import { useEffect, useState } from 'react';
import axios from 'axios';

const useInfiniteArticle = (query, pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setArticles([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: 'GET',
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return cancel();
  }, [query, pageNumber]);

  return { loading, error, articles, hasMore };
};

export default useInfiniteArticle;
