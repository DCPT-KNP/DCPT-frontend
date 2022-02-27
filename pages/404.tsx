import ErrorPage from '@/components/ErrorPage';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>존재하지 않는 페이지</title>
      </Head>
      <ErrorPage
        errorTitle={'404 ERROR'}
        title={'페이지를 찾을 수 없습니다'}
        message={'죄송합니다. 이 페이지를 사용할 수 없습니다.'}
      ></ErrorPage>
    </>
  );
};

export default NotFound;
