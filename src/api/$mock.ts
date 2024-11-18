import type { AspidaClient } from 'aspida';
import type { MockClient, MockConfig } from 'aspida-mock';
import { mockClient } from 'aspida-mock';
import api from './$api';
import mock0 from './articles/index';

export const mockRoutes = () => [
  { path: '/articles', methods: mock0 },
];

export default <U>(client: AspidaClient<U> | MockClient<U>, config?: MockConfig | undefined) => {
  const mock = 'attachRoutes' in client ? client : mockClient(client);
  mock.attachRoutes(mockRoutes(), config);

  return api(mock);
};
