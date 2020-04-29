import React, {useState, useEffect} from 'react';
import getIpAddress2 from './util';


function Location(){
  const [called, setCalled] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {

    async function fetchAddress() {
      const response = await getIpAddress2()
      .then( res => res.data );

      setAddress(response); 
    }

    fetchAddress(); 
  
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