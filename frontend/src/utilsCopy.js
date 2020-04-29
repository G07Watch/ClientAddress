// import getIpAddress from './utils';

const axios = require('axios');

/* const getIpAddress2 = async () => {
  let response;
  response = await axios('https://geoip-db.com/json',
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
  .then(res =>{
    if(res){
      return res.data
    }
  })   
  .catch(error=> error);

  console.log(response);
  return response;
}; */
const getIpAddress2 = () => {
 return axios.get('/api/geo')
};

export default getIpAddress2;