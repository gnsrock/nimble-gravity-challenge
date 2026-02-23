import axios from 'axios';

const api = axios.create({
  baseURL: 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net',
});

export default api;
