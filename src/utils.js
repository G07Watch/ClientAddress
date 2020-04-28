import axios from 'axios';

export const getIpAddress = ()=>{
  return axios.get('http://gd.geobytes.com/GetCityDetails?callback=?');
}

console.log (getIpAddress());