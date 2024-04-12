import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className='w-100 h-48 bg-blue-500 border-2 border-black text-white m-auto'>

            <Link to="/" className='m-20 text-3xl'>Home</Link>
            <Link to="/product" className='text-2xl m-20'>Product</Link>
            <Link to="/todo" className='text-2xl m-20'>MemberTemplate</Link>
            </div>
        </div>
    );
};

export default Menu;