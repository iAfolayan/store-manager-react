import moxios from 'moxios';
import {
  loginCall
} from '../auth'
import {
  payload,
  fakeUser,
  loginEndpoint,
  loginOkResponse,
} from '../../../mockData';

describe('axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('makes axios request to the login endpoint and get a response', async () => {
    moxios.stubRequest(loginEndpoint, {
      status: true,
      response: { loginOkResponse },
    });
    const response = await loginCall(fakeUser);
    expect(response.data.loginOkResponse).toEqual(loginOkResponse);
  });
});
