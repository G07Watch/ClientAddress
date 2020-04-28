import axios from 'axios';

/* const getIpAddress = async () => {
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
    }
    )
    .then(res => {
      if (res) {
        return res.data
      }
    })
    .catch(error => error);

  console.log(response);
  return response.city;
}; */


const getIpAddress = async (lat, lng, key) => {
  let response;
  response = await axios(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    }
    )
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(error => error);

  console.log(response);
  return response;
};

export default getIpAddress;