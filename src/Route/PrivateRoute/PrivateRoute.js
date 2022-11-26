// import React, {  useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider';

// const PrivateRoute = () => {
//     const {user,loading} = useContext(AuthContext)
//     const location = useLocation();
//     if(loading){
//         return <progress className="progress w-56"></progress>
//     }
//     if(user){
//         return 
//     }
//     return <Navigate to='/login' state={{from:location}} replace></Navigate>
// };



import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    console.log("my usrss",user);
    const location = useLocation();
    return (
        <div>
            {
                user ? children : (<Navigate to="/login" replace state={{ from: location }}/>)
            }
        </div>
    );
};

export default PrivateRoute;