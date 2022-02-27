import { useRouter } from 'next/router';
import Btn from './common/Btn';

interface IErrorPageProps {
  errorTitle: string;
  title: string;
  message: string;
}

const ErrorPage = ({ errorTitle, title, message }: IErrorPageProps) => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
              {errorTitle}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="mt-2 text-base text-gray-500">{message}</p>
            <div className="mt-6">
              <Btn
                name={'뒤로가기'}
                styles={{
                  size: '1rem',
                  bgColor: '#000000',
                  color: '#ffffff',
                  margin: 'auto'
                }}
                onClick={handleClickBack}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ErrorPage;
