export interface ErrorMetaData {
  key: string;
  errorTitle: string;
  title: string;
  message: string;
}

export const errorMetaDatas: ErrorMetaData[] = [
  {
    key: '401',
    errorTitle: '401-error',
    title: '페이지 접근 권한이 없습니다.',
    message: '권한이 없습니다. 나중에 다시 시도해주세요.'
  },
  {
    key: '403',
    errorTitle: '403-error',
    title: '페이지 접근 권한이 없습니다.',
    message: '권한이 없습니다. 나중에 다시 시도해주세요.'
  },
  {
    key: '500',
    errorTitle: '500 Error',
    title: '오류가 발생했습니다.',
    message: '오류가 발생했습니다. 나중에 다시 시도해 주세요.'
  }
];
