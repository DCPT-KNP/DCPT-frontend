import useGetAccessToken, { fetcher } from 'hooks/useGetAccessToken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getStorageItem, setStorageItem } from './useLocalStorage';

export function useGetUserInfo() {
  const [queryCode, setCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const code = router?.query?.code as string;
    setCode(code);
  }, [router?.query?.code]);

  const { data } = useGetAccessToken<any>(
    queryCode ? ['/auth/kakao', queryCode] : null,
    fetcher
  );

  if (data) {
    setStorageItem('accessToken', data.response.accessToken);
  }

  const { data: userData, error: userError } = useSWR(
    getStorageItem('accessToken') ? '/user' : null,
    fetcher
  );

  return [userData, userError];

  //   useEffect(() => {
  //     if (userData) {
  //       router.push('/home');
  //     }
  //   }, [userData, router]);
}
