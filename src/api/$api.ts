import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1f8fbl5 } from './articles';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/articles';
  const GET = 'GET';
  const POST = 'POST';

  return {
    articles: {
      get: (option?: { query?: Methods_1f8fbl5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1f8fbl5['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods_1f8fbl5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1f8fbl5['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1f8fbl5['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1f8fbl5['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1f8fbl5['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
