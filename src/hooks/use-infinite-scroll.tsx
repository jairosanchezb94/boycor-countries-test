
import { useEffect, useCallback } from 'react';

export const useInfiniteScroll = (onLoadMore: () => void, isLoading: boolean) => {
  const handleScroll = useCallback(() => {
    if (isLoading) return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      onLoadMore();
    }
  }, [onLoadMore, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
