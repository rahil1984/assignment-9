import React from 'react';
import starImg from '../../Icon/star_1_.png';

const Hotel = (props) => {
    const { title, type, kitchen, cancel, star, price, hotelImg } = props.hotelDetails;

    return (
        <div className='d-flex mb-3'>
           
            <div className="img-sec mr-4">
                <img className='hotel-img' src={hotelImg} alt="" />
            </div>
            <div>
                <h5 className='text-white'>{title}</h5>
                <p className='hotel-text'>
                    {type} <br />
                    {kitchen} <br />
                    {cancel} <br />
                    <img className='star' src={starImg} alt="" />
                    <span className='mr-2'>{star} </span>
                    <span className='ml-2'> {price}/</span>
                    night
                </p>
            </div>
        </div>
    );
};

export default Hotel;