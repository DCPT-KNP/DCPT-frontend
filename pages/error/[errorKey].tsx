import ErrorPage from '@/components/ErrorPage';
import { ErrorMetaData, errorMetaDatas } from '@/metadata/error';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import Head from 'next/head';

interface IErrorPageProps {
  errorMetadata: ErrorMetaData;
}

export default function Page({ errorMetadata }: IErrorPageProps) {
  return (
    <>
      <Head>
        <title>{errorMetadata.title}</title>
      </Head>
      <ErrorPage
        errorTitle={errorMetadata.errorTitle}
        title={errorMetadata.title}
        message={errorMetadata.message}
      ></ErrorPage>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: GetStaticPathsResult['paths'] = [];
  errorMetaDatas.forEach((metadata) => {
    paths.push({
      params: {
        errorKey: metadata.key
      }
    });
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const errorKey = context?.params?.errorKey;
  if (!errorKey) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      errorMetadata: errorMetaDatas.find(({ key }) => key === errorKey)
    }
  };
};
