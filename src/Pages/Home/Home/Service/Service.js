import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { name, description, price, img,  _id } = props.service;
    const navigate = useNavigate();

    const navigatToHandle = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 '>
            <div className="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-title">Price:{price}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button onClick={() => navigatToHandle(_id)} className='btn btn-primary'>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Service;