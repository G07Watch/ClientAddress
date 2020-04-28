import React, {useState, useEffect} from 'react';
import getIpAddress from './utils';


function Location(){
  const [address, setAddress] = useState('None');

  useEffect(() => {
    let latitude;
    let longitude;
    navigator.geolocation.watchPosition(pos =>{
      console.log('pos:', pos);
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
      console.log('lat:', latitude);
      console.log('lng:', longitude);

    });
    return () => console.log('Ran'); 
  }, [address])

  return(

    <div>
      <p class='city' > {address} </p>
      <button onClick={()=> setAddress() }>
        Get Location
      </button>

    </div>


  )

}

export default Location;