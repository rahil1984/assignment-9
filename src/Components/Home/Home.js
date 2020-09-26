import React, {  useContext } from 'react';
import Destination from '../Destination/Destination';
import { UserContext } from '../../App';


const Home = () => {
    const {value1} = useContext(UserContext);
    const [destination, setDestination] = value1;
    
    return (
        <div className='container-fluid'>
            <div className='country-body container'>
                <div className="row country align-items-center">
                    <div className="col-md-4 mr-3">
                        <h1 className='header-text'>Travel Guru</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci numquam cupiditate non natus, dicta officia fugiat consequatur velit tempore dolor, tempora delectus alias doloribus expedita soluta deleniti sit animi qui reprehenderit ea incidunt, facilis vel? Architecto nam quasi fugiat, ipsam unde accusantium sint blanditiis exercitationem qui. Amet, molestiae exercitationem.</p>
                    </div>
                    <div className="col-md-8 row mt-5">
                        {
                            destination.map(dst => <Destination key={destination.id} destination={dst}></Destination>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;