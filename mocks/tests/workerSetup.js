import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from '../handlers';

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
