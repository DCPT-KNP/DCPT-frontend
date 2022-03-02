import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useGetAccessToken, { fetcher } from 'hooks/useGetAccessToken';

const Ex = () => {
  const [queryCode, setCode] = useState('');
  const router = useRouter();
  useEffect(() => {
    const code = router?.query?.code as string;
    setCode(code);
  }, [router?.query?.code]);

  console.log(queryCode);
  const { data } = useGetAccessToken(
    queryCode ? ['/auth/kakao', queryCode] : null,
    fetcher
  );
  if (data) {
    console.log(data, 'data');
  }
  return <div>오하요</div>;
};

export default Ex;
