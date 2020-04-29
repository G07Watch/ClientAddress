const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', (req, res) => {
  axios('https://geoip-db.com/json',
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
      .then(res => {
        if (res) {
          console.log( res.data.city );
          return res.data.city;
        }
      })
      .catch(error => error);
  }
);

module.exports = router;