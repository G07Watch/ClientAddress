const axios = require('axios');

const getIpAddress = async () => {
  let response;
  response = await axios.get('https://geoip-db.com/json')
  .then(res =>{
    if(res){
      return res.data
    }
  })   
  .catch(error=> error);

  console.log(response);
  return response;
};

console.log (getIpAddress());
