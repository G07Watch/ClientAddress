import React, {useState, useEffect} from 'react';
import {getIpAddress} from './util';


function Location(){
  const [called, setCalled] = useState(false);
  const [address, setAddress] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition(pos => {
      setLat (pos.coords.latitude);
      setLng(pos.coords.longitude);
    });

    async function fetchAddress(lat, lng) {
      const response = await getIpAddress(lat, lng)
      .then( res => res.data );

      setAddress(response); 
    }

    fetchAddress(lat,lng); 
    setCalled(false);
  },[called])

  return(

    <div>
      { address && <p> {address} </p> }
      <br></br>      
      <button onClick={()=> setCalled( !called ) }>
        Get Location
      </button>
    </div>


  )

}

export default Location;