import React, { useState } from 'react';
import DestinationData from '../../DestinationData/DestinationData';
import Hotel from './Hotel';


const Details = () => {
    
    const [hotelDetails, setHotelDetails] = useState(DestinationData);
  
    
    return (
        <div className='container'>
            <h2 className='text-white header-text'>Stay in Comfort</h2>
                <div className="row">
                    <div className="col-md-6">

                        {
                            hotelDetails.map(htl => <Hotel hotelDetails={htl}></Hotel>)
                        }
                    </div>

                </div>
        </div>
    );
};

export default Details;