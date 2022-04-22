import React from 'react';
import './SocialLogin.css'
import google from '../images/social/google.png'
import facebook from '../images/social/facebook.png'
import github from '../images/social/github.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {

        errorElement = <div>
            <p>Error: {error?.message}{error1?.message}</p>
        </div>

    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line bg-primary w-50 '></div>
                <p className='mt-2 '>or</p>
                <div className='line bg-primary w-50 '></div>


            </div>
            <div >
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block my-2 mx-auto'>
                    <img src={google} alt="" />
                    Continue With Google
                </button>
                {errorElement}
            </div>
            <div >
                <button className='btn btn-dark d-block my-2 mx-auto'>
                    <img src={facebook} alt="" />
                    Continue With Facebook
                </button>
            </div>
            <div >
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary d-block mx-auto'>
                    <img src={github} alt="" />
                    Continue With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;