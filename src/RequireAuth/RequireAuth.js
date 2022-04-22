import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div>
            <p className='text-danger'>please verify your email</p>
            <button>send verification email again</button>
        </div>
    }
    return children;
};

export default RequireAuth;