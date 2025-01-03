import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
 
 
};

export default PrivateRoute;