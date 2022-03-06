import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useGetAccessToken, { fetcher } from 'hooks/useGetAccessToken';
import { getStorageItem, setStorageItem } from 'hooks/useLocalStorage';
import useSWR from 'swr';

const LoginLoadingPage = () => {
  const [queryCode, setCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const code = router?.query?.code as string;
    setCode(code);
  }, [router?.query?.code]);

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  if (queryCode) {
    console.log('dd?');
  }
  const { data } = useGetAccessToken<any>(
    queryCode ? ['/auth/kakao', queryCode] : null,
    fetcher
  );

  if (data) {
    setStorageItem('accessToken', data.response.accessToken);
  }

  const { data: userData } = useSWR(
    getStorageItem('accessToken') ? '/user' : null,
    fetcher
  );

  if (userData) {
    router.push('/');
  }

  return <div>...loading</div>;
};

export default LoginLoadingPage;
