import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const navigateLogin = event => {
        event.preventDefault();
        navigate(`/login`)
    }
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading || updating) {
        return <Loading></Loading>
    }
    // if (user) {
    //     navigate('/home')
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }
    return (
        <div className=' form-main mx-auto'>
            <div>
                <h1>register</h1>
                <form action="" className='form-container' onSubmit={handleRegister} >
                    <input type="text" name="name" placeholder='Your Name' id="" />
                    <input type="email" name="email" placeholder='Entaer Email' id="" />
                    <input type="password" name="password" placeholder='Enter Password' id="" />
                    <input onClick={() => setAgree(!agree)} className='ms-2' type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ms-2 text-primary' : 'ms-2 text-danger'} htmlFor="terms">Accept terms and condition</label> */}
                    <label className={`ms-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept terms and condition</label>

                    <input
                        disabled={!agree}
                        type="submit" value="Submit" />
                </form>
                <p>ALready Have an account? <span className='text-danger' onClick={navigateLogin}>please Login</span></p>

            </div>
        </div>
    );
};

export default Register;