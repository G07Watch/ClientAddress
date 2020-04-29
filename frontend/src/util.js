import axios from 'axios';

const getIpAddress = (lat, lng) => {
  return axios.get(`/api/geo/${lat}/${lng}`)
}

const getIpAddress2 = () => {
 return axios.get('/api/geo')
};

export { getIpAddress, getIpAddress2};