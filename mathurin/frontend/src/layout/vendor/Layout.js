import React from 'react';

// internal import
import Sidebar from './Sidebar/sidebar';
import Main from './Sidebar/Main';

const Layout = ({ children }) => {
    return (
        <div className='flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden'> 
            <Sidebar />
            <Main>
                {children}
            </Main>
        </div>
    );
};

export default Layout;
