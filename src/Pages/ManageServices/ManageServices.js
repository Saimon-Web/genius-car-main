import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices]=useServices();
    const handleDelete =id => {
        const proceed=window.confirm('are you sure?')
        if(proceed){
        fetch(`http://localhost:5000/service/${id}`, {
            method:"DELETE",

        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            //ui teke delete hobe
            const remaining =services.filter(service => service._id !== id);
            setServices(remaining);
        })
        }
    }
    return (
        <div>
          <h1>manage your services</h1>  
          {
              services.map(service => <div>
                  <h5>{service.name} <button onClick={() => handleDelete(service._id)} >x</button></h5>
              </div>)
          }
        </div>
    );
};

export default ManageServices;