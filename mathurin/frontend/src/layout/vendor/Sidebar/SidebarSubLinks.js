import { SidebarContext } from '@context/SidebarContext';
import { useRouter } from 'next/router';
import React, { useMemo, memo, useContext } from 'react';
import { IoChevronDownOutline, IoChevronForwardOutline, IoRemoveSharp } from 'react-icons/io5';

const SidebarSubLinks = ({ mainLink, Icon, sublinks, path }) => {
    const { isSubMenuOpen, toggleSubMenu } = useContext(SidebarContext);
    const { pathname, push } = useRouter();

    const handleToggleMenu = () => {
        toggleSubMenu(!isSubMenuOpen);
    };

    const handleNavigation = (navTo) => push(navTo);

    const toggleIcon = useMemo(() => (
        isSubMenuOpen ? <IoChevronDownOutline /> : <IoChevronForwardOutline />
    ), [isSubMenuOpen]);

    return (
        <>
            <li className='relative text-gray-500 dark:text-gray-400'>
                <button
                    onClick={handleToggleMenu}
                    className={`px-6 py-4 inline-flex items-center cursor-pointer w-full text-sm font-semibold transition-colors duration-150 hover:text-blue-700 dark:hover:text-gray-200`}
                >
                    <span className="inline-flex items-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        <span className="ml-4 mt-1">{mainLink}</span>
                        <span className="pl-4 mt-1">
                            {toggleIcon}
                        </span>
                    </span>
                </button>

                {isSubMenuOpen && <ul
                    className="overflow-hidden text-sm font-medium rounded-md dark:bg-gray-900 px-6 py-3 "
                    aria-label="submenu"
                >
                    {sublinks.map(({ subRouteName, subRoutePath }) => {
                        const isActiveRoute = pathname.split("/").slice(-1)[0] === subRoutePath;
                        return (
                            <li
                                key={subRouteName}
                            >
                                {/* Left border */}
                                {isActiveRoute && <span
                                    className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>}

                                <button
                                    onClick={() => handleNavigation(`${path}/${subRoutePath}`)}
                                    className={
                                        `${isActiveRoute ? `text-blue-500 dark:text-gray-100` : 'text-gray-600'} flex items-center font-serif py-1 text-sm hover:text-blue-600 cursor-pointer px-2`
                                    }
                                >
                                    <span className="text-xs pr-1 inline-flex items-center gap-1 cursor-pointer">
                                        <IoRemoveSharp />
                                        {subRouteName}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>}
            </li>
        </>
    );
};

export default memo(SidebarSubLinks);
