// @flow
import axios from 'axios';
import config from '../config';

const token = 'some-token-from-auth';

const Fetch = axios.create({
  baseURL: config.api,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default Fetch;
