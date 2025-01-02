import React, { useContext } from 'react';
import Navbar from '../Componets/Navbar';
import Banner from '../Componets/Banner';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
           <div className='text-center, py-4 mb-4 '>
                <h1 className='text-center font-bold text-4xl'>

                Welcome {user.displayName}
                </h1>
              
           </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;