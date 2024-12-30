import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-svh'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>      
    );
};

export default MainLayout;