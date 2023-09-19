import { useRouter } from 'next/router';
import React from 'react';

const SidebarLink = ({ routeName, Icon, path }) => {
    const { pathname, push } = useRouter();
    const isActiveRoute = pathname === path;
    const handleNavigate = () => push(path);
    return (
        <button
            onClick={handleNavigate}
            className={`${isActiveRoute ? 'text-blue-500 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'} relative px-6 py-4 inline-flex items-center cursor-pointer w-full text-sm font-semibold transition-colors duration-150 hover:text-blue-700 dark:hover:text-gray-200`}
        >
            {/* Left border */}
            {isActiveRoute && <span
                className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
            ></span>}
            <Icon className="w-5 h-5" />
            <span className="ml-4">{routeName}</span>
        </button>
    );
};

export default SidebarLink;
