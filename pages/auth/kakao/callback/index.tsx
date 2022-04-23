import useAppContext, { actions } from 'contexts/App';
import useGetAccessToken, { fetcher } from 'hooks/useGetAccessToken';
import { getStorageItem, setStorageItem } from 'hooks/useLocalStorage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const LoginLoadingPage = () => {
  const [queryCode, setCode] = useState('');
  const router = useRouter();
  const { store, dispatch } = useAppContext();

  useEffect(() => {
    const code = router?.query?.code as string;
    setCode(code);
  }, [router?.query?.code]);

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

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

  useEffect(() => {
    if (userData) {
      dispatch(actions.login());
      router.push('/');
    }
  }, [userData, dispatch, router]);

  return <div>...loading</div>;
};

export default LoginLoadingPage;
