const axios = require('axios');

const getIpAddress2 = () => {
 return axios.get('/api/geo')
};

export default getIpAddress2;