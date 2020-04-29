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
        .then( local => { 
          return res.json(local.data.city) })
        .catch(error => error);

});

module.exports = router;