import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR, { Fetcher, Key, SWRConfiguration, SWRResponse } from 'swr';
import { requests } from 'utils/api';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'fallbackData'
  > {
  fallbackData?: Data;
}

// export default function useRequest<Data = unknown, Error = unknown>(request:GetRequest,{fallbackData, ...config}:Config<Data,Error> = {}) : Return<Data,Error>{
//     const {data:response, error, isValidating,mutate} = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
//         request && JSON.stringify(request),
//         () => axios.request<Data>(request!),{
//             ...config,
//             fallbackData: fallbackData && {
//                 status:200,
//                 statusText: 'initData',
//                 config:request!,
//                 headers:{},
//                 data:fallbackData
//             }
//         }
//     )

//     return {
//         data: response?.data,
//         response,
//         error,
//         isValidating,
//         mutate
//     }

// }

export const fetcher = (url: any, code: any) => requests.get(url, { code });

export default function useGetAccessToken<T>(url: Key, fetcher: Fetcher) {
  const response = useSWR(url, fetcher);
  return response as SWRResponse<T, any>;
}
