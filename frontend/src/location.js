import React, {useState, useEffect} from 'react';
// import getIpAddress from './utils';
import getIpAddress2 from './utilsCopy';


function Location(){
  const [count, setCount] = useState(0);
  const [address, updateAddress] = useState(null);

  useEffect(() => {

    let didCancel = false;

    async function fetchAddress() {
      console.log('in fetchAddress');
      const address = await getIpAddress2();
      
      if (!didCancel){
        updateAddress(address);
      }
    }

    console.log('here!');
    fetchAddress();  

    console.log('current address', address);
  
    return () => {
      didCancel = true;
    };
  
  },[address, updateAddress, count])

  return(

    <div>
      <p className='city' >
        {address ? `${address}` : 'Loading' }
        </p>

        <br></br>

        <p>
        {count}
       </p>

      <button onClick={()=> setCount(count + 1) }>
        Get Location
      </button>

    </div>


  )

}

export default Location;