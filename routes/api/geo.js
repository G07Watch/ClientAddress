const express = require('express');
const router = express.Router();
const key = require('../../config/keys').secretOrKey;

const axios = require('axios');

router.get('/:lat/:lng', (req, res) => {
  let lat = req.params.lat;
  let lng = req.params.lng;

  axios(
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
  .then( response => {
    let city = response.data.results[0].address_components[2].long_name;

    return res.json(city);
  })
  .catch(error => {
    return error;
  });

});

// router.get('/', (req, res) => {
//     axios('https://geoip-db.com/json',
//         {
//           method: 'GET',
//           mode: 'no-cors',
//           headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//           },
//           withCredentials: true,
//           credentials: 'same-origin',
//         })
//         .then( local => { 
//           return res.json(local.data.city) })
//         .catch(error => error);

// });



module.exports = router;