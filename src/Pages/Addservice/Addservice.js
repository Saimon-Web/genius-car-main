import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url=`http://localhost:5000/service`;
        fetch(url, {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>please add to the service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description", { pattern: /^[A-Za-z]+$/i })} />
                <input className='mb-2'  placeholder='price' type="number" {...register("price")} />
                <input className='mb-2'  placeholder='Photo url' type="text" {...register("img")} />
               <input type="submit" value="add service" />
            </form>

        </div>
    );
};

export default Addservice;