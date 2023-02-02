import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <div className='navbar-area'>
            <div>
                <h1 className='text-3xl font-bold text-purple-900'>Curd</h1>
            </div>
            <div>
                <div>
                    <ul className='menu_list'>
                        <li className='hover:text-purple-800 text-lg font-semibold '><Link to='/'>Home</Link></li>
                        <li className='hover:text-purple-800 text-lg font-semibold '><Link to='/login'>Login</Link></li>
                        <li className='hover:text-purple-800 text-lg font-semibold '><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;